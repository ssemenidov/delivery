import React from 'react';
import {CardType} from '../interfaces';
interface BasketCard extends CardType {
  deleteCard: (x: String) => void;
}
function BasketCard({
  id,
  title,
  descr,
  url,
  price,
  mass,
  deleteCard,
}: BasketCard) {
  return (
    <div className='flex flex-row rounded-xl relative w-full'>
      <div className=' '>
        <div
          className='min-w-full w-20 h-20 md:w-24 md:h-24   bg-center bg-no-repeat bg-cover rounded-l-lg'
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
      </div>
      <div className='flex justify-between px-3 flex-col h-20  md:h-24 w-full '>
        <div className=''>
          <div className='text-black1 text-sm font-medium pb-1'>{title}</div>
          <div
            className='text-gray1 text-xs  overflow-y-hidden'
            style={{fontSize: '10px', lineHeight: '11px'}}
          >
            {descr}
          </div>
        </div>
        <div className='flex flex-row w-full justify-between'>
          <div className=' text-black1 whitespace-nowrap text-xs self-center'>
            {mass} гр
          </div>
          <div className='whitespace-nowrap text-orange1 text-sm font-medium'>
            {price} руб.
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <button onClick={() => {}} className='p-2 focus:outline-none'>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.27933 8.37179C-0.09311 8.74424 -0.0931098 9.34809 0.27933 9.72054C0.651769 10.093 1.25561 10.093 1.62805 9.72054L4.99994 6.34861L8.37195 9.72067C8.74439 10.0931 9.34823 10.0931 9.72067 9.72067C10.0931 9.34822 10.0931 8.74437 9.72067 8.37192L6.34866 4.99986L9.7204 1.62808C10.0928 1.25563 10.0928 0.651779 9.7204 0.279334C9.34795 -0.0931111 8.74411 -0.0931114 8.37167 0.279334L4.99994 3.65112L1.62833 0.279462C1.25589 -0.092983 0.652045 -0.0929828 0.279606 0.279462C-0.0928338 0.651907 -0.0928341 1.25576 0.279606 1.62821L3.65121 4.99986L0.27933 8.37179Z'
              fill='#B9B9B9'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BasketCard;