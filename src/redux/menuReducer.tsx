import {ActionType, MenuType} from '../interfaces';
import tomYam from '../assets/img/tom-yam.png';
const initialState: MenuType = {
  menu: [
    {
      id: '1',
      title: 'Фо-Бо',
      descr:
        'Мясной бульон на говядине, рисовая лапша, мраморная говядина, базилик, мята, кинза.',
      url: tomYam,
      price: 320,
      mass: 420,
    },
    {
      id: '2',
      title: 'Том Ям2',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '3',
      title: 'Том Ям3',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '4',
      title: 'Том Ям4',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '5',
      title: 'Том Ям5',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '6',
      title: 'Том Ям6',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '7',
      title: 'Том Ям7',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '8',
      title: 'Том Ям8',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
    {
      id: '9',
      title: 'Том Ям9',
      descr: 'Куриный бульон, грибы, креветки, острая паста Том Ям',
      url: tomYam,
      price: 290,
      mass: 350,
    },
  ],
};
export const menuReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};
