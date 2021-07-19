export interface CardType {
  id: string;
  title: string;
  descr: string;
  url: string;
  price: number;
  mass: number;
}
export interface AddressType {
  address: string;
  lat: string;
  lang: string;
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

export interface StateType {
  basket: {
    basket: CardType[];
  };
  menu: {
    menu: CardType[];
  };
  address: {
    address: string;
    lat: string;
    lang: string;
  };
}
