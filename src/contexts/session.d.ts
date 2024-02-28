export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};
export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};
