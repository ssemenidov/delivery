import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import BasketCard from '../components/BasketCard';
import {CardType, StateType} from '../interfaces';
import {ClearBasket} from '../redux/actions';
import {GetTotal} from '../redux/basketReducer';

function Basket() {
  const history = useHistory();
  const dispatch = useDispatch();
  const address = useSelector((state: StateType) => state.address.address);
  const basket = useSelector((state: StateType) => state.basket.basket);
  const total = GetTotal(basket);

  const handleArrow = () => {
    dispatch(ClearBasket());
    history.goBack();
  };
  return (
    <div className=' flex flex-col  justify-between align-center w-full  h-screen'>
      <div className='p-4 md:p-11 xl:px-40 '>
        <div className='py-2 flex items-center '>
          <div className='mr-4 h-full '>
            <button
              onClick={handleArrow}
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
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.195262 5.59086C0.131344 5.52694 0.083119 5.45327 0.0505858 5.37464C0.0200275 5.30095 0.00230584 5.22059 0.000209987 5.13635C7.02739e-05 5.13073 0 5.1251 0 5.11945C0 4.94884 0.0650874 4.77822 0.195262 4.64805L4.64805 0.195262C4.9084 -0.0650874 5.33051 -0.0650873 5.59086 0.195262C5.85121 0.455612 5.85121 0.877722 5.59086 1.13807L2.27614 4.45279H14.8353C15.2035 4.45279 15.502 4.75126 15.502 5.11945C15.502 5.48764 15.2035 5.78612 14.8353 5.78612H2.27614L5.59086 9.10083C5.85121 9.36118 5.85121 9.78329 5.59086 10.0436C5.33051 10.304 4.9084 10.304 4.64805 10.0436L0.195262 5.59086Z'
                  fill='#2C2C2C'
                />
              </svg>
            </button>
          </div>
          <div className='text-2xl md:text-3xl font-medium'>??????????????</div>
        </div>
        <div className='py-2 mb-4'>
          <div className='text-base bg-white flex items-center rounded-md shadow-lg'>
            <input
              className='rounded w-full py-3 px-6 text-gray1  focus:outline-none'
              id='search'
              type='text'
              value={address}
              readOnly
            />
          </div>
        </div>
        <div className='overflow-y-auto'>
          {basket.map((value, index) => (
            <div className='mb-6 w-full' key={value.id}>
              <BasketCard {...value}></BasketCard>
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
            <div className=''>?????????? ?? ??????????????????:</div>
            <div className=''>{total} ??????.</div>
          </div>
          <div className='text-gray1 flex justify-between mb-5'>
            <div className=''>?????????? ????????????????:</div>
            <div className=''>??? 40 ??????.</div>
          </div>
          <button
            className='btn-orange mb-4'
            onClick={() => {
              alert('??????????????!');
            }}
          >
            ???????????????? ?? ???????????? ??????
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
