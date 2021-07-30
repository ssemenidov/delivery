const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const fileName = './models/model1.json';
const model = require(fileName);

// eslint-disable-next-line max-len
const {
  getCatalog,
  getMenuDishes,
  parseData,
  modelInit,
} = require('./controllers/controller');
// -App config
const app = express();
// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/data', async (req, res) => {
  modelInit();
  console.log(req.query);
  const lat = req.query.lat;
  const lang = req.query.lang;
  const slug = await getCatalog(lat, lang);

  res.status(200).send(slug);
});
app.get('/menu', async (req, res) => {
  // console.log(req.query);
  const lat = req.query.lat;
  const lang = req.query.lang;
  const slug = req.query.slug;
  const dishes = await getMenuDishes(slug, lat, lang);
  // console.log(dishes);
  parseData(dishes);

  res.status(200).send('ok');
});
app.get('/food', (req, res) => {
  const cat = req.query.cat;
  console.log(cat);

  const dishes = model.find((value) => value.name === cat).items;
  // console.log(dishes);
  res.status(200).send(dishes);
});

// - Listen commands
exports.api = functions.https.onRequest(app);
