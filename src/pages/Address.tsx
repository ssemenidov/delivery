import React from 'react';
import SearchBar from '../components/SearchBar';
import {useHistory} from 'react-router';
function Address() {
  const history = useHistory();
  return (
    <div className='p-4 flex flex-col items-center  justify-center h-screen'>
      <div className='w-full flex flex-col h-full md:h-auto justify-center  text-base md:max-w-3xl lg:max-w-6xl md:mb-40'>
        <SearchBar />
      </div>
      <div className='py-4 md:max-w-md lg:max-w-lg  '>
        <button className='btn-orange ' onClick={() => history.push('/menu')}>
          Продолжить
        </button>
        <div className='text-gray1 text-sm py-2 md:text-center'>
          <p>
            Нажимая кнопку Продолжить Вы соглашаетесь с
            <a href='#' className='text-orange1 underline'>
              {' '}
              Условиями продоставления услуги{' '}
            </a>
            и
            <a href='#' className='text-orange1 underline'>
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
