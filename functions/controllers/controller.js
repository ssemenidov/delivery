const axios = require('axios');
const {model}=require('../models/model');
exports.parseData = (data) => {
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
exports.getData = async (lat, lang) => {
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
  const catalogData = await catalogRes.data.payload.foundPlaces.slice(0, 30);
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
