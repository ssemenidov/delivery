import {ActionCard} from '../interfaces';
import {ADDRESS_UPDATE} from './types';
const initialState: {address: string} = {
  address: '',
};
export const AddressReducer = (state = initialState, action: ActionCard) => {
  switch (action.type) {
    case ADDRESS_UPDATE:
      return {...state, address: action.payload};
    default:
      return state;
  }
};
