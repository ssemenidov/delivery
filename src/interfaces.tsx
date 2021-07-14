export interface CardType {
  id: string;
  title: string;
  descr: string;
  url: string;
  price: number;
  mass: number;
}

export type Action = {
  type: string;
  payload: any;
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
}
