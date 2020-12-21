import { Item } from '../../../../shared/Cart/Cart.types';
import { SummaryItemRow } from '../Item/SummaryItemRow';
import styles from './SummaryItemsTable.module.css';

type SummaryItemsTableProps = {
  items: Item[];
};

export const SummaryItemsTable = ({ items }: SummaryItemsTableProps) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <SummaryItemRow key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);
