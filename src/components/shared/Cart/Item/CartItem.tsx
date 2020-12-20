import { ChangeEvent, memo } from 'react';
import { Item } from '../Cart.types';
import styles from './CartItem.module.css';

type CartItemProps = {
  item: Item;
  onChange: (value: number) => void;
};

export const CartItem = memo(
  function CartItem({ item, onChange }: CartItemProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.currentTarget.value));
    };

    return (
      <li key={item.name} className={styles.item}>
        <div>
          {item.name}, Cost: <strong>{item.cost} PLN</strong>, quantity:
        </div>
        <input
          className={styles.itemQuantityInput}
          type="number"
          min={0}
          value={item.quantityInCart}
          onChange={handleChange}
        />
      </li>
    );
  },
  (prevProps, nextProps) => prevProps.item.quantityInCart === nextProps.item.quantityInCart,
);
