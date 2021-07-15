import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';
interface SearchBarProps {
  address: string;
  setAddress: (x: string) => void;
}
function DevSearchBar({address, setAddress}: SearchBarProps) {
  const loadSuggest = (ymaps: any) => {
    const suggestView = new ymaps.SuggestView('suggest');
    suggestView.events.add('select', (e: any) => {
      console.log(e.get('item'));
    });
  };
  const getCoords = (e: any) => {
    console.log(e.get('coords'));
  };
  return (
    <div className='App'>
      <input type='text' className='form-control' id='suggest' />
      <YMaps>
        <Map
          onLoad={(ymaps) => loadSuggest(ymaps)}
          onClick={(e: any) => getCoords(e)}
          defaultState={{center: [55.751574, 37.573856], zoom: 9}}
          modules={['SuggestView']}
          width='600px'
          height='600px'
        />
      </YMaps>
    </div>
  );
}

export default DevSearchBar;
