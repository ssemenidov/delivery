import {ActionAddress, ActionType, AddressType} from '../interfaces';
import {ADDRESS_UPDATE, LATLANG_UPDATE} from './types';

const initialState: AddressType = {
  address: 'Депутатская улица, 48, Иркутск',
  lat: '52.2709745',
  lang: '104.3220563',
};
export const AddressReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADDRESS_UPDATE:
      return {...state, address: action.payload};
    case LATLANG_UPDATE:
      return {...state, lat: action.payload.lat, lang: action.payload.lang};
    default:
      return state;
  }
};
