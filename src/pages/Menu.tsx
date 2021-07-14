import React from 'react';
import burger from '../assets/img/burger.png';
import sushi from '../assets/img/sushi.png';
import pizza from '../assets/img/pizza.png';
import tomYam from '../assets/img/tom-yam.png';

import {CardType, StateType} from '../interfaces';
import Card from '../components/Card';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

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
  {title: 'Суши и роллы	', url: sushi},
  {title: 'Бургеры, картошка ', url: burger},
  {title: 'Пицца', url: pizza},
  {title: 'Суши и роллы	', url: sushi},
  {title: 'Бургеры, картошка ', url: burger},
  {title: 'Пицца', url: pizza},
  {title: 'Суши и роллы	', url: sushi},
  {title: 'Бургеры, картошка ', url: burger},
  {title: 'Пицца', url: pizza},
  {title: 'Суши и роллы	', url: sushi},
  {title: 'Бургеры, картошка ', url: burger},
  {title: 'Пицца', url: pizza},
  // {title: 'Супы', url: ''},
  // {title: 'Салаты', url: ''},
  // {title: 'десерты', url: ''},
  // {title: 'напитки', url: ''},
];

function Menu() {
  const history = useHistory();
  const menu = useSelector((state: StateType) => state.menu.menu);
  return (
    <div className='pt-4  flex flex-col  min-h-screen  w-full '>
      <div className='px-4  md:pl-11 xl:pl-40 pr-0 relative'>
        <div className=' flex flex-row whitespace-nowrap overflow-x-scroll scrollbar-hide my-4 '>
          {cat.map((value, index) => (
            <div className=' cursor-pointer  text-sm bg-gray-100 text-black1 rounded-3xl py-3 px-4 mr-3 active:bg-orange1 active:text-white '>
              {value}
            </div>
          ))}
        </div>
        <div className=' flex flex-row overflow-x-scroll scrollbar-hide  pb-2 mb-3 relative'>
          <div className='fixed top-0 right-0 h-60 w-12 bg-gradient-to-l from-white '></div>
          {cat_food.map(({title, url}, index) => (
            <div className=' cursor-pointer w-36 xl:w-40  flex flex-col align-center mr-3 xl:mr-5'>
              <div
                className='rounded-xl w-36 h-24 xl:w-40 xl:h-28  bg-center bg-no-repeat bg-cover '
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
          <div className=''>
            <Card key={index} {...value}></Card>
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
