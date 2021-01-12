import { Box, Heading } from '@chakra-ui/react';
import { useCartSummaryItems, useCartTotal } from '../../../shared/Cart/Cart.slice';
import { SummaryItemsTable } from './ItemsTable/SummaryItemsTable';

export const Summary = () => {
  const items = useCartSummaryItems();
  const total = useCartTotal();

  return (
    <Box>
      <Heading as="h1" mb={4}>
        Cart summary
      </Heading>
      <Box mb={4}>
        <SummaryItemsTable items={items} />
      </Box>
      <Heading as="h3" size="md">
        Total cost: {total} PLN
      </Heading>
    </Box>
  );
};
