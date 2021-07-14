import React from 'react';
import {useHistory} from 'react-router-dom';
import tomYam from '../assets/img/tom-yam.png';
import BasketCard from '../components/BasketCard';
import {CardType} from '../interfaces';
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
    id: '4',
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
    id: '4',
    title: 'Том Ям',
    descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
    url: tomYam,
    price: 290,
    mass: 350,
  },
];
function Basket() {
  const history = useHistory();
  const deleteCard = (id: String) => {};
  return (
    <div className=' flex flex-col  min-h-screen align-center w-full '>
      <div className='p-4 md:p-11 xl:px-40 '>
        <div className='py-2 flex items-center '>
          <div className='mr-4 h-full '>
            <button
              onClick={() => history.goBack()}
              className='    focus:outline-none  flex items-center h-4 w-4  md:w-5 md:h-5 xl:w-6 xl:h-6'
            >
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 16 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.195262 5.59086C0.131344 5.52694 0.083119 5.45327 0.0505858 5.37464C0.0200275 5.30095 0.00230584 5.22059 0.000209987 5.13635C7.02739e-05 5.13073 0 5.1251 0 5.11945C0 4.94884 0.0650874 4.77822 0.195262 4.64805L4.64805 0.195262C4.9084 -0.0650874 5.33051 -0.0650873 5.59086 0.195262C5.85121 0.455612 5.85121 0.877722 5.59086 1.13807L2.27614 4.45279H14.8353C15.2035 4.45279 15.502 4.75126 15.502 5.11945C15.502 5.48764 15.2035 5.78612 14.8353 5.78612H2.27614L5.59086 9.10083C5.85121 9.36118 5.85121 9.78329 5.59086 10.0436C5.33051 10.304 4.9084 10.304 4.64805 10.0436L0.195262 5.59086Z'
                  fill='#2C2C2C'
                />
              </svg>
            </button>
          </div>
          <div className='text-2xl md:text-3xl font-medium'>Корзина</div>
        </div>
        <div className='py-2 mb-4'>
          <div className='text-base bg-white flex items-center rounded-md shadow-lg'>
            <input
              className='rounded w-full py-3 px-6 text-gray1  focus:outline-none'
              id='search'
              type='text'
              placeholder='Марьиной Рощи, 2'
              readOnly
            />
          </div>
        </div>
        <div className='overflow-y-auto'>
          {dishes.map((value, index) => (
            <div className='mb-6 w-full'>
              <BasketCard {...value} deleteCard={deleteCard}></BasketCard>
            </div>
          ))}
        </div>
      </div>
      <div
        className=' sticky bottom-0  text-base bg-white p-4  rounded-md flex justify-center '
        style={{boxShadow: ' 0px -5px 15px rgba(84, 84, 84, 0.1)'}}
      >
        <div className='md:max-w-md w-full'>
          <div className='text-black1 flex justify-between '>
            <div className=''>Итого с доставкой:</div>
            <div className=''>1168 руб.</div>
          </div>
          <div className='text-gray1 flex justify-between mb-5'>
            <div className=''>Время доставки:</div>
            <div className=''>≈ 40 мин.</div>
          </div>
          <button
            className='btn-orange mb-4'
            onClick={() => {
              alert('Спасибо!');
            }}
          >
            Заказать в Яндекс Еде
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
