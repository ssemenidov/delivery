import React from 'react';
import burger from '../assets/img/burger.png';
import sushi from '../assets/img/sushi.png';
import pizza from '../assets/img/pizza.png';
import tomYam from '../assets/img/tom-yam.png';
const cat = ['самое быстрое', 'самое доступное', 'высший рейтинг'];
const cat_food = [
  {title: 'Суши и роллы	', url: burger},
  {title: 'Бургеры, картошка, фастфуд', url: sushi},
  {title: 'Пицца', url: pizza},
  // {title: 'Супы', url: ''},
  // {title: 'Салаты', url: ''},
  // {title: 'десерты', url: ''},
  // {title: 'напитки', url: ''},
];
const dishes = [
  {
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: '',
    price: '290 руб.',
    mass: '350 гр',
  },
];
function Menu() {
  return (
    <div className='p-4 flex flex-col  h-screen align-center w-full'>
      <div className=' flex flex-row whitespace-nowrap overflow-x-auto my-5'>
        {cat.map((value, index) => (
          <div className='bg-gray-100 text-black rounded-3xl py-2 px-4 mx-1 hover:bg-orange hover:text-white'>
            {value}
          </div>
        ))}
      </div>
      <div className=' flex flex-row overflow-x-auto my-5'>
        {cat_food.map(({title, url}, index) => (
          <div className='w-40 flex flex-col align-center mx-2'>
            <div
              className='rounded-xl w-40 h-28 bg-center bg-no-repeat bg-cover '
              style={{
                backgroundImage: `url(${url})`,
              }}
            ></div>

            <div className='whitespace-normal text-center '>
              <span>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
