export interface IProduct {
  id: string;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartSate {
  items: ICartItem[];
  failedStockCheck: number[];
}
