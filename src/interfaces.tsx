export interface CardType {
  id: string;
  title: string;
  descr: string;
  url: string;
  price: number;
  mass: string;
}
export interface AddressType {
  address: string;
  lat: string;
  lang: string;
}
export interface BasketType {
  basket: CardType[];
}

export interface MenuType {
  menu: CardType[];
}

export type ActionType = {
  type: string;
  payload: any;
};
export type ActionAddress = {
  type: string;
  payload: AddressType;
};
export type ActionCard = {
  type: string;
  payload: CardType;
};
export type ActionId = {
  type: string;
  payload: string;
};
export type ActionMenu = {
  type: string;
  payload: CardType[];
};

export interface StateType {
  basket: BasketType;
  menu: MenuType;
  address: AddressType;
}
