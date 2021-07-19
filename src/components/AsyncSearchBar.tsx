import axios from '../axios';
import React from 'react';
import Select, {components} from 'react-select';
import AsyncSelect from 'react-select/async';
import geo from '../assets/img/Vector.svg';

interface SearchBarProps {
  address: string;
  setAddress: (x: string) => void;
}
//react-select styles
type OptionType = {
  label: string;
  value: string;
};
const options: OptionType[] = [
  {value: 'Марьиной рощи', label: 'Марьиной рощи'},
  {value: 'Маркса', label: 'Маркса'},
  {value: 'Маркса 5', label: 'Маркса 5 '},
  {value: 'Марьиной рощи  6', label: 'Марьиной рощи 6'},
  {value: 'Маршала Жукова', label: 'Маршала Жукова '},
  {value: 'Маршала Жукова 5', label: 'Маршала Жукова 5'},
  {value: 'Гагарина 18', label: 'Гагарина 18'},
  {value: 'Жукова 28', label: 'Жукова 28'},
  {value: 'Депутатская 38', label: 'Депутатская 38'},
  {value: 'Пискунова 62', label: 'Пискунова 62'},
];
const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isDisabled
      ? null
      : state.isFocused
      ? '#F4F4F4'
      : state.isSelected
      ? null
      : null,
    color: state.isSelected ? 'black' : 'gray',
    padding: '7px 20px',
  }),

  dropdownIndicator: () => ({
    backroundImage: {geo},
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  input: () => ({
    opacity: 1,
  }),
  control: () => ({
    display: 'flex',
    backgroundColor: 'white',
    boxShadow: '0px 6px 15px rgba(84, 84, 84, 0.1)',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = 1;
    const transition = 'opacity 300ms';

    return {...provided, opacity, transition};
  },
};
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props} className='p-2'>
      <img src={geo} alt='' />
    </components.DropdownIndicator>
  );
};

function AsyncSearchBar({address, setAddress}: SearchBarProps) {
  const handleChange = (value: {value: string; label: string} | null) => {
    console.log(value?.value);
    setAddress(value?.value ? value?.value : '404');
  };

  const loadOptions = async (inputValue: string): Promise<OptionType[]> => {
    console.log(inputValue);

    const res = await axios({
      method: 'get',
      url: 'https://search-maps.yandex.ru/v1/',
      params: {
        text: inputValue,
        type: 'geo',
        lang: 'ru_RU',
        apikey: process.env.REACT_APP_API_KEY,
        results: 5,
      },
    });
    const data = await res.data.features.map((item: any) => ({
      label: item.properties.GeocoderMetaData.text,
      value: item.properties.GeocoderMetaData.text,
    }));
    await console.log(data);
    return options;
  };

  const handleInputChange = (newValue: string) => {
    setAddress(newValue);
    console.log(newValue);
  };
  return (
    <div className='py-2'>
      <AsyncSelect
        cacheOptions
        styles={customStyles}
        components={{DropdownIndicator}}
        loadOptions={loadOptions}
        onChange={handleChange}
        inputValue={address}
        onInputChange={handleInputChange}
      />
    </div>
  );
}

export default AsyncSearchBar;
