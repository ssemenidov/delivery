import React, {useState} from 'react';
import {CardType} from '../interfaces';
interface BasketCard extends CardType {
  addCard: (x: String) => void;
}
function Card({id, title, descr, url, price, mass, addCard}: BasketCard) {
  const [checked, setChecked] = useState(false);
  const handleClick = (id: String) => {
    setChecked(!checked);
  };
  return (
    <div
      className='flex flex-row rounded-xl '
      style={{boxShadow: '0px 6px 15px rgba(84, 84, 84, 0.1)'}}
    >
      <div className='flex flex-col  align-center '>
        <div
          className='min-w-full w-24 h-24  md:w-28 md:h-28 bg-center bg-no-repeat bg-cover rounded-tl-lg'
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
        <div className='py-3 text-gray1 whitespace-nowrap text-sm self-center'>
          {mass} гр
        </div>
      </div>
      <div className='flex justify-around p-3 flex-col'>
        <div className='h-24 md:h-28'>
          <div className='text-black1 text-base font-medium'>{title}</div>
          <div className='text-gray1 text-sm '>{descr}</div>
        </div>
        <div className='flex flex-row w-full justify-between'>
          <div className='whitespace-nowrap text-black1 text-base md:text-lg font-medium'>
            {price} руб.
          </div>
          <div className=''>
            {checked ? (
              <button
                onClick={() => handleClick(id)}
                className='text-sm  bg-orange1 text-white py-2 px-7 border-2 border-orange1 rounded-lg whitespace-nowrap'
              >
                Убрать
              </button>
            ) : (
              <button
                onClick={() => handleClick(id)}
                className='text-sm text-orange1 bg-white py-2 px-6 border-2 border-orange1 rounded-lg whitespace-nowrap'
              >
                В корзину
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
