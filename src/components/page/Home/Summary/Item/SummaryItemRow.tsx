import { memo } from 'react';
import { Item } from '../../../../shared/Cart/Cart.types';

type SummaryItemRowProps = {
  item: Pick<Item, 'name' | 'quantityInCart' | 'totalInCart'>;
};

export const SummaryItemRow = memo(
  function SummaryItemRow({ item }: SummaryItemRowProps) {
    return (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.quantityInCart}</td>
        <td>{item.totalInCart}</td>
      </tr>
    );
  },
  (prevProps, nextProps) => prevProps.item.quantityInCart === nextProps.item.quantityInCart,
);
