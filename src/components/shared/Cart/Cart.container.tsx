import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { Cart } from './Cart';
import { changeItemQuantity, getItems, useCart } from './Cart.slice';

export const CartContainer = () => {
  const { items, loading, error } = useCart();
  const dispatch = useAppDispatch();

  const handleChangeItemQuantity = useCallback(
    (id: string) => (value: number) => {
      dispatch(changeItemQuantity({ id, quantityInCart: value }));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const cartProps = {
    items,
    loading,
    error,
    onChangeItemQuantity: handleChangeItemQuantity,
  };

  return <Cart {...cartProps} />;
};
