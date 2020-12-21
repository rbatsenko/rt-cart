import { useCartSummaryItems, useCartTotal } from '../../../shared/Cart/Cart.slice';
import { SummaryItemsTable } from './ItemsTable/SummaryItemsTable';

export const Summary = () => {
  const items = useCartSummaryItems();
  const total = useCartTotal();

  return (
    <div>
      <h1>Cart summary</h1>
      <SummaryItemsTable items={items} />
      <h3>Total cost: {total}</h3>
    </div>
  );
};
