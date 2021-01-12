import { Box, Heading, Skeleton, Stack, UnorderedList } from '@chakra-ui/react';
import { CartItem } from './Item/CartItem';
import { CartProps } from './Cart.types';

const CartSkeleton = () => (
  <Stack>
    <Skeleton height="40px" />
    <Skeleton height="40px" />
    <Skeleton height="40px" />
  </Stack>
);

export const Cart = ({ items, loading, error, onChangeItemQuantity }: CartProps) => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Cart
      </Heading>
      {loading && <CartSkeleton />}
      {!loading && !error && (
        <UnorderedList>
          {items.map(item => (
            <CartItem key={item.id} item={item} onChange={onChangeItemQuantity(item.id)} />
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};
