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
    <div className='pt-4  flex flex-col  min-h-screen  w-full relative'>
      <div className='px-4  md:pl-11 xl:pl-40 pr-0'>
        <div className=' flex flex-row whitespace-nowrap overflow-x-auto my-4 '>
          {cat.map((value, index) => (
            <div className=' cursor-pointer text-sm bg-gray-100 text-black1 rounded-3xl py-3 px-4 mr-3 hover:bg-orange1 hover:text-white '>
              {value}
            </div>
          ))}
        </div>
        <div className=' flex flex-row overflow-x-auto  pb-2 mb-3'>
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
        {dishes.map((value, index) => (
          <div className=''>
            <Card {...value} addCard={addCard}></Card>
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
