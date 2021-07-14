import {CardType} from '../interfaces';
import {ADD_CARD, DELETE_CARD, DELETE_CARD_MANY} from './types';

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
