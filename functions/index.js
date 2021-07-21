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
  const response = await axios.get(
    // eslint-disable-next-line max-len
    'https://eda.yandex/api/v2/catalog',
    {
      params: {
        latitude: req.query.lat,
        longitude: req.query.lang,
      },
    },
    {timeout: 1}
  );
  const data = await response.data.payload.foundPlaces;
  const slug = await data.map((value) => value.place.slug);
  await console.log(slug);

  const str = await JSON.stringify(data);

  console.log(str.slice(0, 10));
  await res.status(200).send(str.slice(0, 10));
});
// - Listen commands
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
