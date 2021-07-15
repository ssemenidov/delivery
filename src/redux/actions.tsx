import {CardType} from '../interfaces';
import {ADDRESS_UPDATE, ADD_CARD, DELETE_CARD, DELETE_CARD_MANY} from './types';

export function AddCard(item: CardType) {
  return {
    type: ADD_CARD,
    payload: item,
  };
}
export function DeleteCard(id: string) {
  return {
    type: DELETE_CARD,
    payload: id,
  };
}
export function ClearBasket() {
  return {
    type: DELETE_CARD_MANY,
  };
}
export function AddressUpdate(address: string) {
  return {
    type: ADDRESS_UPDATE,
    payload: address,
  };
}
