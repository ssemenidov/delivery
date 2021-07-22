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
  const catalogRes = await axios.get(
    // eslint-disable-next-line max-len
    'https://eda.yandex/api/v2/catalog',
    {
      params: {
        latitude: req.query.lat,
        longitude: req.query.lang,
      },
    }
  );
  const catalogData = await catalogRes.data.payload.foundPlaces.slice(0, 1);
  const slug = await catalogData.map((value) => value.place.slug);
  await console.log(slug);
  slug.forEach(async (element) => {
    const menuRes = await axios.get(
      // eslint-disable-next-line max-len
      `https://eda.yandex/api/v2/catalog/${element}/menu`,
      {
        params: {
          latitude: req.query.lat,
          longitude: req.query.lang,
        },
      }
    );
    const menuData = await menuRes.data.payload.categories;
    await console.log(menuData);
  });

  const str = await JSON.stringify(catalogData);
  // console.log(str);
  await res.status(200).send(str);
});
// - Listen commands
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
