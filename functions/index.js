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

app.get('/data', async (req, res) => {
  console.log(req.query);
  const lat = req.query.lat;
  const lang = req.query.lang;
  const data = await getData(lat, lang);
  parseData(data);

  res.status(200).send('ok');
});
app.get('/food/', (req, res) => {
  const cat = req.query.cat;
  console.log(cat);
  const dishes = model.find((value) => value.name === cat).items;
  // console.log(dishes);
  res.status(200).send(dishes);
});

const model = [
  {
    name: 'sushi',
    keyWords: [
      'Роллы',
      'Суши',
      'Горячие роллы',
      'Закрытые роллы',
      'Запечённые роллы',
      'Поке'
    ],
    items: [],
  },
  {
    name: 'burger',
    keyWords: [
      'Картошка',
      'Бургеры',
      'Бургеры из говядины',
      'Сэндвичи',
      'Бургеры из курицы и рыбы',
      'Картошки-фри',
      'Куриные ножки',
      'Куриные крылышки',
      'Чикенсы'
    ],
    items: [],
  },
  {
    name: 'pizza',
    keyWords: ['Пицца', 'Закрытая пицца'],
    items: [],
  },
  {
    name: 'pasta',
    keyWords: [
      'Паста',
      'Вок',
      'Лапша',
      'Вьетнамская лапша'
    ],
    items: [],
  },
  {
    name: 'soup',
    keyWords: ['Супы', 'Рамен и мисо'],
    items: [],
  },
  {
    name: 'salad',
    keyWords: ['Салаты'],
    items: [],
  },
  {
    name: 'sweet',
    keyWords: ['Десерты'],
    items: [],
  },
  {
    name: 'drink',
    keyWords: [
      'Напитки',
      'Горячие напитки',
      'Вода, напитки',
      'Морсы, кисели, компоты',
      'Молочные коктейли',
      'Милкшейки',
      'Чай, кофе'
    ],
    items: [],
  },
  {
    name: '',
    keyWords: [''],
    items: [],
  },
];
const parseData = (data) => {
  console.log(data.length);
  data.forEach((dataCat) => {
    // console.log(dataCat.cat);
    model.forEach((modelCat) => {
      if (modelCat.keyWords.includes(dataCat.cat)) {
        modelCat.items = [...modelCat.items, ...dataCat.items];
        // console.log(dataCat.cat, modelCat.keyWords);
      }
    });
  });
  // console.log(model);
};
const getData = async (lat, lang) => {
  const slug = await getCatalog(lat, lang);
  console.log(slug);
  const ResItems = await getAllMenuDishes(slug, lat, lang);

  // console.log(ResItems);
  return ResItems;
};
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
  const catalogData = await catalogRes.data.payload.foundPlaces.slice(0, 20);
  const slug = catalogData
    .filter((value)=>value.place.business=='restaurant')
    .map((value) => value.place.slug);
  return slug;
};
// eslint-disable-next-line no-unused-vars
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
      url: dish.picture ?
        'https://eda.yandex'+dish.picture.uri.replace('{w}x{h}', '200x200') :
        null,
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
