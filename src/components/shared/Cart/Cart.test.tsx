/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { itemsMock } from '../../../mocks/data/items';
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
    render(<Cart {...cartProps} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  test('displays items', () => {
    render(<Cart {...cartProps} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
