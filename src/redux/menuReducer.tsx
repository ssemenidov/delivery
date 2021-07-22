import {ActionMenu, ActionType, MenuType} from '../interfaces';
import tomYam from '../assets/img/tom-yam.png';
import {SET_MENU} from './types';
const initialState: MenuType = {
  menu: [],
};
export const menuReducer = (state = initialState, action: ActionMenu) => {
  switch (action.type) {
    case SET_MENU:
      return {menu: action.payload};
    default:
      return state;
  }
};
