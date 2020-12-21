import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { Cart } from './Cart';
import { changeItemQuantity, getItems, useCart } from './Cart.slice';

export const CartContainer = () => {
  const { items, loading, error } = useCart();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleChangeItemQuantity = useCallback(
    (id: string) => (value: number) => {
      dispatch(changeItemQuantity({ id, quantityInCart: value }));
    },
    [dispatch],
  );

  const showErrorToast = useCallback(
    (error: string) => {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
    [toast],
  );

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      showErrorToast(error);
    }
  }, [error, showErrorToast]);

  const cartProps = {
    items,
    loading,
    error,
    onChangeItemQuantity: handleChangeItemQuantity,
  };

  return <Cart {...cartProps} />;
};
