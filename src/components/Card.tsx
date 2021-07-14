import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {CardType} from '../interfaces';
import {AddCard, DeleteCard} from '../redux/actions';

function Card({id, title, descr, url, price, mass}: CardType) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    if (!checked) {
      dispatch(AddCard({id, title, descr, url, price, mass}));
      setChecked(!checked);
    } else {
      dispatch(DeleteCard(id));
      setChecked(!checked);
    }
  };
  return (
    <div
      className='flex flex-row rounded-xl relative '
      style={{boxShadow: '0px 6px 15px rgba(84, 84, 84, 0.1)'}}
    >
      <div className='flex flex-col  align-center re '>
        <div
          className='min-w-full w-24 h-24  md:w-28 md:h-28 xl:w-40 xl:h-40 bg-center bg-no-repeat bg-cover rounded-tl-lg'
          style={{
            backgroundImage: `url(${url})`,
          }}
        ></div>
        <div className='xl:hidden py-3 text-gray1 whitespace-nowrap text-sm self-center'>
          {mass} гр
        </div>
      </div>
      <div className='flex justify-around  flex-col p-3 xl:h-40 w-full'>
        <div className='h-24 md:h-28'>
          <div className='text-black1 text-base font-medium'>{title}</div>
          <div className='text-gray1 text-sm leading-4 '>{descr}</div>
        </div>
        <div className='flex flex-row w-full justify-between'>
          <div className='whitespace-nowrap text-black1 text-base md:text-lg font-medium'>
            {price} руб.
          </div>
          <div className=''>
            <button
              onClick={() => handleClick()}
              className={`${
                checked ? 'bg-orange1 text-white ' : 'text-orange1 bg-white  '
              } text-sm  transition duration-500 py-2 border-2 border-orange1 text-center w-32 rounded-lg whitespace-nowrap`}
            >
              {checked ? ' Убрать' : 'В корзину'}
            </button>
          </div>
        </div>
      </div>
      <div className='absolute top-3 right-2 text-black1 whitespace-nowrap text-sm hidden xl:block '>
        {mass} гр
      </div>
    </div>
  );
}

export default Card;
