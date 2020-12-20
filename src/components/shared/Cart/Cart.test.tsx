/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { itemsMock } from '../../../mocks/data/items';
import { store } from '../../../store/store';
import { Cart } from './Cart';

describe('Cart component', () => {
  const items = itemsMock.map(item => ({ ...item, quantityInCart: 0, totalInCart: 0 }));

  const cartProps = {
    items,
    loading: false,
    error: '',
    onChangeItemQuantity: (str: string) => (num: number) => {},
  };

  test('displays title', () => {
    render(
      <Provider store={store}>
        <Cart {...cartProps} />
      </Provider>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  test('displays items', () => {
    render(
      <Provider store={store}>
        <Cart {...cartProps} />
      </Provider>,
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
