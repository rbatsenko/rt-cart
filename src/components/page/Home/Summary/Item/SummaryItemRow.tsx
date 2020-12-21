import { Td, Tr } from '@chakra-ui/react';
import { memo } from 'react';
import { Item } from '../../../../shared/Cart/Cart.types';

type SummaryItemRowProps = {
  item: Pick<Item, 'name' | 'quantityInCart' | 'totalInCart'>;
};

export const SummaryItemRow = memo(
  function SummaryItemRow({ item }: SummaryItemRowProps) {
    return (
      <Tr key={item.name}>
        <Td>{item.name}</Td>
        <Td isNumeric>{item.quantityInCart}</Td>
        <Td isNumeric>{item.totalInCart} PLN</Td>
      </Tr>
    );
  },
  (prevProps, nextProps) => prevProps.item.quantityInCart === nextProps.item.quantityInCart,
);
