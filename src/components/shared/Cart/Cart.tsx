import { CartItem } from './Item/CartItem';
import { CartProps } from './Cart.types';

export const Cart = ({ items, loading, error, onChangeItemQuantity }: CartProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map(item => (
          <CartItem key={item.id} item={item} onChange={onChangeItemQuantity(item.id)} />
        ))}
      </ul>
    </div>
  );
};
