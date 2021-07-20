import {combineReducers} from 'redux';
import {AddressReducer} from './addressReducer';
import {basketReducer} from './basketReducer';
import {menuReducer} from './menuReducer';

export const rootReduceer = combineReducers({
  basket: basketReducer,
  menu: menuReducer,
  address: AddressReducer,
});
