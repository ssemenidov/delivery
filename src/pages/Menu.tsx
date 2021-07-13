import React from 'react';
import burger from '../assets/img/burger.png';
import sushi from '../assets/img/sushi.png';
import pizza from '../assets/img/pizza.png';
import tomYam from '../assets/img/tom-yam.png';

import {CardType} from '../interfaces';
import Card from '../components/Card';
import {useHistory} from 'react-router-dom';

const cat = ['самое быстрое', 'самое доступное', 'высший рейтинг'];
const cat_food = [
  {title: 'Суши и роллы	', url: sushi},
  {title: 'Бургеры, картошка ', url: burger},
  {title: 'Пицца', url: pizza},
  // {title: 'Супы', url: ''},
  // {title: 'Салаты', url: ''},
  // {title: 'десерты', url: ''},
  // {title: 'напитки', url: ''},
];
const dishes: CardType[] = [
  {
    id: '1',
    title: 'Фо-Бо',
    descr:
      'Мясной бульон на говядине, рисовая лапша, мраморная говядина, базилик, мята, кинза.',
    url: tomYam,
    price: 320,
    mass: 420,
  },
  {
    id: '2',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '3',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '4',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '5',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '5',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '5',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '5',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
  {
    id: '5',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
];
function Menu() {
  const history = useHistory();
  const addCard = (id: String) => {};
  return (
    <div className='pt-4  flex flex-col  min-h-screen align-center w-full relative'>
      <div className='px-4 pr-0 md:px-11'>
        <div className=' flex flex-row whitespace-nowrap overflow-x-auto my-4 '>
          {cat.map((value, index) => (
            <div className=' cursor-pointer text-xs bg-gray-100 text-black1 rounded-3xl py-2 px-4 mr-2 hover:bg-orange1 hover:text-white '>
              {value}
            </div>
          ))}
        </div>
        <div className=' flex flex-row overflow-x-auto mt-1 mb-5'>
          {cat_food.map(({title, url}, index) => (
            <div className=' cursor-pointer w-28  flex flex-col align-center mr-2'>
              <div
                className='rounded-xl w-28 h-20  bg-center bg-no-repeat bg-cover '
                style={{
                  backgroundImage: `url(${url})`,
                }}
              ></div>

              <div className='whitespace-normal text-xs text-center '>
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-11 pb-20 overflow-y-auto'>
        {dishes.map((value, index) => (
          <div className=''>
            <Card {...value} addCard={addCard}></Card>
          </div>
        ))}
      </div>
      <div className='px-4 md:px-11  fixed  bottom-7 w-full'>
        <button
          className='btn-orange   py-3 text-sm box-border '
          onClick={() => history.push('/basket')}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Menu;
