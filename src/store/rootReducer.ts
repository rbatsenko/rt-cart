import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from '../components/shared/Cart/Cart.slice';

const rootReducer = combineReducers({ cart: cartReducer });

export default rootReducer;
