import { memo } from 'react';
import {
  Box,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { Item } from '../Cart.types';

type CartItemProps = {
  item: Item;
  onChange: (value: number) => void;
};

export const CartItem = memo(
  function CartItem({ item, onChange }: CartItemProps) {
    const handleChange = (_valueAsString: string, valueAsNumber: number) => {
      onChange(valueAsNumber);
    };

    return (
      <ListItem display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box>
          {item.name}, Cost: <strong>{item.cost} PLN</strong>, quantity:
        </Box>
        <NumberInput min={0} ml={2} value={item.quantityInCart} onChange={handleChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </ListItem>
    );
  },
  (prevProps, nextProps) => prevProps.item.quantityInCart === nextProps.item.quantityInCart,
);
