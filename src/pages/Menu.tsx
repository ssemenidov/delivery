import React, {useEffect, useState} from 'react';
import burger from '../assets/img/burger.png';
import sushi from '../assets/img/sushi.png';
import pizza from '../assets/img/pizza.png';
import pasta from '../assets/img/pasta.png';
import soup from '../assets/img/soup.png';
import sweet from '../assets/img/sweet.png';

import salad from '../assets/img/salad.png';
import drink from '../assets/img/drink.png';

import {CardType, StateType} from '../interfaces';
import Card from '../components/Card';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../axios';
import {SetMenu} from '../redux/actions';
const cat = [
  'самое быстрое',
  'самое доступное',
  'высший рейтинг',
  'самое быстрое',
  'самое доступное',
  'высший рейтинг',
  'самое быстрое',
  'самое доступное',
  'высший рейтинг',
];
const cat_food = [
  {title: 'Суши, роллы и поке', url: sushi, id: 'sushi'},
  {title: 'Бургеры, картошка, фастфуд ', url: burger, id: 'burger'},
  {title: 'Пицца', url: pizza, id: 'pizza'},
  {title: 'Паста и удон', url: pasta, id: 'pasta'},
  {title: 'Супы ', url: soup, id: 'soup'},
  {title: 'Салаты', url: salad, id: 'salad'},
  {title: 'Десерты	', url: sweet, id: 'sweet'},
  {title: 'Напитки', url: drink, id: 'drink'},
];

function Menu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const menu = useSelector((state: StateType) => state.menu.menu);
  const address = useSelector((state: StateType) => state.address);
  const [currentCat, setCurrentCat] = useState(0);
  const [currentFood, setCurrentFood] = useState(0);
  useEffect(() => {
    async function getCatalog() {
      const res = await axios({
        method: 'get',
        url: '/data',
        params: {
          lat: address.lat,
          lang: address.lang,
        },
      });
      console.log(res.data);
      //dispatch(SetMenu(res.data));
    }
    getCatalog().then(() => setCurrentFood(0));
  }, []);
  useEffect(() => {
    const cat = cat_food[currentFood].id;
    console.log(cat);
    async function getMenu() {
      const res = await axios({
        method: 'get',
        url: `/food/`,
        params: {
          cat: cat,
        },
      });
      console.log(res.data);
      dispatch(SetMenu(res.data));
    }
    getMenu();
  }, [currentFood]);
  const CatClick = (index: number) => {
    setCurrentCat(index);
  };
  const FoodClick = (index: number) => {
    setCurrentFood(index);
  };
  return (
    <div className='pt-4  flex flex-col  min-h-screen  w-full '>
      <div className='px-4  md:pl-11 xl:pl-40 pr-0 relative'>
        <div className=' flex flex-row whitespace-nowrap overflow-x-scroll scrollbar-hide my-4 '>
          {cat.map((value, index) => (
            <div
              onClick={() => CatClick(index)}
              key={index}
              className={`${
                index == currentCat
                  ? 'bg-orange1 text-white '
                  : 'bg-gray-100 text-black1'
              } transition duration-300 cursor-pointer  text-sm  rounded-3xl py-3 px-4 mr-3   `}
            >
              {value}
            </div>
          ))}
        </div>
        <div className=' flex flex-row overflow-x-scroll scrollbar-hide pl-1 pt-1 pb-2 mb-3 relative'>
          <div className=' fixed top-0 right-0 h-60 w-12 bg-gradient-to-l from-white '></div>
          {cat_food.map(({title, url}, index) => (
            <div
              key={index}
              onClick={() => FoodClick(index)}
              className={`${
                index == currentFood ? 'transform scale-105' : ''
              } cursor-pointer w-36 xl:w-40  flex flex-col align-center mr-3 xl:mr-5`}
            >
              <div
                className={`  rounded-xl w-36 h-24 xl:w-40 xl:h-28  bg-center bg-no-repeat bg-cover `}
                style={{
                  backgroundImage: `url(${url})`,
                }}
              ></div>
              <div className='whitespace-normal text-sm text-center '>
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-11 xl:px-40 pb-20 overflow-y-auto'>
        {menu.map((value, index) => (
          <div className='' key={index}>
            <Card {...value}></Card>
          </div>
        ))}
      </div>
      <div className='px-4 md:px-11 flex   justify-center fixed  bottom-7 w-full'>
        <button
          className='btn-orange   py-3 text-sm box-border  md:max-w-md lg:max-w-lg'
          onClick={() => history.push('/basket')}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Menu;
