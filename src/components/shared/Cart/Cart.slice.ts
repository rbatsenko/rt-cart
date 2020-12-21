import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { useTypedSelector } from '../../../store/store';
import { notEmpty } from '../../../utils/notEmpty';
import { ChangeItemQuantityActionPayload, Item } from './Cart.types';

export const initialCartState = {
  items: [] as Item[],
  loading: false,
  error: '',
};

export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await fetch(api.items);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data = (await response.json()) as Item[];

  return data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    changeItemQuantity: (state, action: { payload: ChangeItemQuantityActionPayload }) => {
      const { id, quantityInCart } = action.payload;

      state.items = state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantityInCart,
            totalInCart: quantityInCart * item.cost,
          };
        }

        return item;
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(getItems.pending, state => {
      state.loading = true;
    });
    builder.addCase(getItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Unknown error';
    });
    builder.addCase(getItems.fulfilled, (state, { payload }) => {
      state.loading = false;

      const itemsToUpdate = state.items.filter(a => state.items.some(b => a.id === b.id));
      const updatedItems = itemsToUpdate
        .map(oldItem => {
          const itemToUpdate = payload.find(newItem => newItem.id === oldItem.id);

          return itemToUpdate
            ? { ...itemToUpdate, quantityInCart: oldItem.quantityInCart, totalInCart: oldItem.totalInCart }
            : null;
        })
        .filter(notEmpty);

      const newItems = payload
        .filter(a => !state.items.some(b => a.id === b.id))
        .map(item => ({ ...item, quantityInCart: 0, totalInCart: 0 }));

      state.items = [...updatedItems, ...newItems];
    });
  },
});

// Hooks
export const useCart = () => useTypedSelector(({ cart }) => cart);

export const useCartSummaryItems = () =>
  useTypedSelector(({ cart: { items } }) => items.filter(({ quantityInCart }) => !!quantityInCart));

export const useCartTotal = () =>
  useTypedSelector(({ cart: { items } }) => items.reduce((acc, item) => acc + item.totalInCart || 0, 0));

// Actions
export const { changeItemQuantity } = cartSlice.actions;

// Reducer
export const cartReducer = cartSlice.reducer;
