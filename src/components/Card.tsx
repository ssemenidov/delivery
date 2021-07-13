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
          className='min-w-full w-20 h-20  md:w-24 md:h-24 bg-center bg-no-repeat bg-cover rounded-tl-lg'
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
        <div className='py-3 text-gray1 whitespace-nowrap text-xs self-center'>
          {mass} гр
        </div>
      </div>
      <div className='flex justify-around p-3 flex-col'>
        <div className='h-20 md:h-24'>
          <div className='text-black1 text-sm font-medium'>{title}</div>
          <div className='text-gray1 text-xs '>{descr}</div>
        </div>
        <div className='flex flex-row w-full justify-between'>
          <div className='whitespace-nowrap text-black1 text-sm md:text-base font-medium'>
            {price} руб.
          </div>
          <div className=''>
            {checked ? (
              <button
                onClick={() => handleClick(id)}
                className='text-xs  bg-orange1 text-white py-2 px-7 border-2 border-orange1 rounded-md whitespace-nowrap'
              >
                Убрать
              </button>
            ) : (
              <button
                onClick={() => handleClick(id)}
                className='text-xs text-orange1 bg-white py-2 px-5 border-2 border-orange1 rounded-md whitespace-nowrap'
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
