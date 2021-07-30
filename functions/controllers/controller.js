const axios = require('axios');
const fs = require('fs');
const fileName = 'D://html-projects/delivery/functions/models/model.json';
const model = require('../models/model.json');
const {modelTemplate} = require('../models/modelTemplate');

const modelInit = () => {
  fs.writeFile(
    fileName,
    JSON.stringify(modelTemplate),
    function writeJSON(err) {
      if (err) return console.log(err, 1);
      // console.log(JSON.stringify(model));
      // console.log('writing to ' + fileName);
    }
  );
};
const parseCat = (cat, newData) => {
  cat.items = [...cat.items, ...newData];
  // newData.forEach((element) => {
  //   let f = true;
  //   cat.items.forEach((item) => {
  //     if (item.title === element.title) {
  //       f = false;
  //       item.items.push(element);
  //       item.url = element.url;
  //       item.mass = element.mass;
  //       item.price = element.price;
  //       item.descr = element.descr;
  //     }
  //   });
  //   if (f) cat.data.push(element);
  // });
};
const parseData = (data) => {
  data.forEach((dataCat) => {
    // console.log(dataCat.cat);
    model.forEach((modelCat, index) => {
      if (modelCat.keyWords.includes(dataCat.cat)) {
        model[index].items = [...modelCat.items, ...dataCat.items];
      }
    });
  });
  fs.writeFile(fileName, JSON.stringify(model), function writeJSON(err) {
    if (err) return console.log(err, 1);
    // console.log(JSON.stringify(model));
    // console.log('writing to ' + fileName);
  });
};
const getData = async (lat, lang) => {
  const slug = await getCatalog(lat, lang);
  // console.log(slug);
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
    .filter((value) => value.place.business == 'restaurant')
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
  // console.log(slug);
  const menuData = await getMenu(slug, lat, lang);
  // console.log(menuData);
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
      url: dish.picture
        ? 'https://eda.yandex' + dish.picture.uri.replace('{w}x{h}', '200x200')
        : null,
    }));

    // console.log(CatItem);
    return {cat: cat.name, items: catDishes};
  });
  // console.log(allDishes);
  return allDishes;
};

exports.getCatalog = getCatalog;
exports.parseData = parseData;
exports.getData = getData;
exports.getMenuDishes = getMenuDishes;
exports.parseCat = parseCat;
exports.modelInit = modelInit;
