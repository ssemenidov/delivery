export interface CardType {
  id: String;
  title: String;
  descr: String;
  url: String;
  price: number;
  mass: number;
}

export type Action = {
  type: String;
  payload: any;
};
export type ActionCard = {
  type: String;
  payload: CardType;
};
export type ActionId = {
  type: String;
  payload: String;
};

export interface StateType {
  basket: {
    basket: CardType[];
  };
  menu: {
    menu: CardType[];
  };
}
