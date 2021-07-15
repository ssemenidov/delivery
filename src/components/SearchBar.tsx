import React from 'react';
import Select, {components} from 'react-select';
import geo from '../assets/img/Vector.svg';

interface SearchBarProps {
  address: string;
  setAddress: (x: string) => void;
}
//react-select styles
const options = [
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
  control: () => ({
    display: 'flex',
    backgroundColor: 'white',
    boxShadow: '0px 6px 15px rgba(84, 84, 84, 0.1)',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
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

function SearchBar({address, setAddress}: SearchBarProps) {
  const handleChange = (value: {value: string; label: string} | null) => {
    if (value?.value) {
      setAddress(value?.value);
    }
  };
  return (
    <div className='py-2'>
      <Select
        options={options}
        styles={customStyles}
        components={{DropdownIndicator}}
        placeholder='Укажите адрес доставки'
        // maxMenuHeight={300}
        onChange={handleChange}
      />
      {/* <div
        className='bg-white flex items-center rounded-md '
        style={{boxShadow: '0px 6px 15px rgba(84, 84, 84, 0.1)'}}
      >
        <input
          className='rounded w-full py-3 px-6 text-gray1  focus:outline-none'
          id='search'
          type='text'
          placeholder='Укажите адрес доставки'
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAddress(e.target.value)
          }
        />
        <div className=''>
          <button className=' text-white rounded-full p-2  focus:outline-none w-12 h-12 flex items-center justify-center'>
            <svg
              width='12'
              height='16'
              viewBox='0 0 12 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 16C6 16 12 10.314 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 2.37122e-08 4.4087 0 6C0 10.314 6 16 6 16ZM6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9Z'
                fill='#FF754A'
              />
            </svg>
          </button>
        </div> 
      </div>*/}
    </div>
  );
}

export default SearchBar;
