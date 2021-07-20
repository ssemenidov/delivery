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

app.get('/food', (req, res) => {
  console.log(req.query);
  axios
    .get(
      // eslint-disable-next-line max-len
      'https://eda.yandex/api/v2/catalog',
      {
        params: {
          latitude: req.query.lat,
          longitude: req.query.lang,
        },
      },
      {timeout: 1}
    )
    .then((response) => {
      console.log(
        JSON.stringify(response.data.payload.foundPlaces.slice(0, 10))
      );
      res
        .status(200)
        .send(JSON.stringify(response.data.payload.foundPlaces.slice(0, 10)));
    })
    .catch((error) => {
      console.log(error);
    });
});
// - Listen commands
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-ce035/us-central1/api
