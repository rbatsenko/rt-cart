import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { Item } from '../../../../shared/Cart/Cart.types';
import { SummaryItemRow } from '../Item/SummaryItemRow';

type SummaryItemsTableProps = {
  items: Item[];
};

export const SummaryItemsTable = ({ items }: SummaryItemsTableProps) => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th width="50%">Item</Th>
        <Th width="25%" isNumeric>
          Quantity
        </Th>
        <Th width="25%" isNumeric>
          Total
        </Th>
      </Tr>
    </Thead>
    <Tbody>
      {items.map(item => (
        <SummaryItemRow key={item.id} item={item} />
      ))}
    </Tbody>
  </Table>
);
