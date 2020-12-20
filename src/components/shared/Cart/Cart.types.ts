export type Item = {
  id: string;
  name: string;
  cost: number;
  quantityInCart: number;
  totalInCart: number;
};

export type ChangeItemQuantityActionPayload = Pick<Item, 'id' | 'quantityInCart'>;

export type CartProps = {
  items: Item[];
  loading: boolean;
  error: string;
  onChangeItemQuantity: (id: string) => (value: number) => void;
};
