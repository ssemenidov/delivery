import React from 'react';
import SearchBar from '../components/SearchBar';
function Address() {
  return (
    <div className='p-4 flex flex-col justify-between h-screen'>
      <div className='flex flex-col h-full justify-center align-center'>
        <SearchBar />
      </div>
      <div className='py-4'>
        <button className='btn-orange '>Продолжить</button>
        <div className='text-grey text-sm py-2'>
          <p>
            Нажимая кнопку Продолжить Вы соглашаетесь с
            <a href='#' className='text-orange underline'>
              {' '}
              Условиями продоставления услуги{' '}
            </a>
            и
            <a href='#' className='text-orange underline'>
              {' '}
              Правилами пользования сервисом
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Address;
