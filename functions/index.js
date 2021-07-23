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
  // console.log(slug);
  const ResItems = await getAllMenuDishes(slug, lat, lang);
  // console.log(ResItems);

  res.status(200).send('ok');
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
const getAllMenuDishes = async (slug, lat, lang) => {
  return (
    await Promise.all(slug.map((element) => getMenuDishes(element, lat, lang)))
  ).flat(1);
};
// eslint-disable-next-line no-unused-vars
const getAllMenuCats = async (slug, lat, lang) => {
  return Promise.all(slug.map((element) => getMenuCats(element, lat, lang)));
};
const getMenuDishes = async (slug, lat, lang) => {
  const menuData = await getMenu(slug, lat, lang);
  const menuDishes = getDishes(menuData);
  const menuDishesM = menuDishes.flat(1);

  return menuDishesM;
};
const getMenuCats = async (slug, lat, lang) => {
  const menuData = await getMenu(slug, lat, lang);

  const menuCats = await getCats(menuData);
  const menuCatsM = await menuCats.flat(1);
  return menuCatsM;
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
  return menuData;
};
const getCats = (menuData) => {
  const menuCat = menuData.map((value) => {
    // console.log(value);
    return value.name;
  });
  return menuCat;
};
const getDishes = (menuData) => {
  const allDishes = menuData.map((cat, index) => {
    const catDishes = cat.items.map((dish) => ({
      id: dish.id.toString(),
      title: dish.name,
      price: dish.price,
      descr: dish.description,
      mass: dish.weight,
      url: dish.picture ? dish.picture.uri.replace('{w}x{h}', '200x200') : '',
    }));

    // console.log(CatItem);
    return {cat: cat.name, items: catDishes};
  });
  // console.log(allDishes);
  return allDishes;
};

// - Listen commands
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
