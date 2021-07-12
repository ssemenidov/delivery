import React from 'react';
import SearchBar from '../components/SearchBar';
import {useHistory} from 'react-router';
function Address() {
  const history = useHistory();
  return (
    <div className='p-4 flex flex-col justify-between h-screen'>
      <div className='flex flex-col h-full justify-center align-center'>
        <SearchBar />
      </div>
      <div className='py-4'>
        <button className='btn-orange ' onClick={() => history.push('/menu')}>
          Продолжить
        </button>
        <div className='text-gray1 text-sm py-2'>
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
