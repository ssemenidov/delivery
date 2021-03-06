import {ActionCard, ActionId, BasketType, CardType} from '../interfaces';
import {ADD_CARD, DELETE_CARD, DELETE_CARD_MANY} from './types';
const initialState: BasketType = {
  basket: [],
};
export const basketReducer = (
  state = initialState,
  action: ActionCard | ActionId
) => {
  switch (action.type) {
    case ADD_CARD:
      return {...state, basket: [...state.basket, action.payload]};
    case DELETE_CARD:
      const newBasket = state.basket.filter(
        (value) => value.id !== action.payload
      );
      return {...state, basket: newBasket};
    case DELETE_CARD_MANY:
      return {...state, basket: []};

    default:
      return state;
  }
};

export const GetTotal = (basket: CardType[]) => {
  const total = basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return total;
};
