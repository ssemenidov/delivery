import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import {AddressUpdate, LatLangUpdate} from '../redux/actions';
import AsyncSearchBar from '../components/AsyncSearchBar';
import GoogleSearchBar from '../components/GoogleSearchBar';
function Address() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [latLang, setlatLang] = useState({lat: '', lang: ''});
  const handleClick = () => {
    dispatch(AddressUpdate(address));
    dispatch(LatLangUpdate(latLang));
    history.push('/menu');
  };
  return (
    <div className='p-4 flex flex-col items-center  justify-center h-screen'>
      <div className='w-full flex flex-col h-full md:h-auto justify-center  text-base md:max-w-3xl lg:max-w-6xl md:mb-40'>
        <GoogleSearchBar
          address={address}
          setAddress={setAddress}
          setlatLang={setlatLang}
        />
      </div>
      <div className='py-4 md:max-w-md lg:max-w-lg  '>
        <button className='btn-orange ' onClick={() => handleClick()}>
          Продолжить
        </button>
        <div className='text-gray1 text-sm py-2 md:text-center'>
          <p>
            Нажимая кнопку Продолжить Вы соглашаетесь с
            <a href='/#' className='text-orange1 underline'>
              {' '}
              Условиями продоставления услуги{' '}
            </a>
            и
            <a href='/#' className='text-orange1 underline'>
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
