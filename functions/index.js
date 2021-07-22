const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// -App config
const app = express();
// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/food', async (req, res) => {
  console.log(req.query);
  const lat = req.query.lat;
  const lang = req.query.lang;
  const slug = await getCatalog(lat, lang);
  console.log(slug);
  const ResItems = await getAllMenu(slug, lat, lang);

  // // console.log(str);
  const merged = ResItems.flat(1);
  await console.log(merged);
  res.status(200).send(merged);
});

const getCatalog = async (lat, lang) => {
  const catalogRes = await axios.get(
    // eslint-disable-next-line max-len
    'https://eda.yandex/api/v2/catalog',
    {
      params: {
        latitude: lat,
        longitude: lang,
      },
    }
  );
  const catalogData = await catalogRes.data.payload.foundPlaces.slice(0, 2);
  const slug = await catalogData.map((value) => value.place.slug);
  // await console.log(slug);
  return slug;
};
const getAllMenu = async (slug, lat, lang) => {
  return Promise.all(slug.map((element) => getMenu(element, lat, lang)));
};
const getMenu = async (slug, lat, lang) => {
  const menuRes = await axios.get(
    // eslint-disable-next-line max-len
    `https://eda.yandex/api/v2/catalog/${slug}/menu`,
    {
      params: {
        latitude: lat,
        longitude: lang,
      },
    }
  );
  const menuData = await menuRes.data.payload.categories;
  const menuItems = await menuData.map((cat, index) => {
    // console.log(cat);
    const dishes = cat.items.map((dish) => ({
      id: dish.id.toString(),
      title: dish.name,
      price: dish.price,
      descr: dish.description,
      mass: dish.weight,
      url: dish.picture ? dish.picture.uri.replace('{w}x{h}', '200x200') : '',
    }));

    // console.log(CatItem);
    return dishes;
  });
  // await console.log(menuItems);
  const merged = await menuItems.flat(1);
  return merged;
};

// - Listen commands
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
