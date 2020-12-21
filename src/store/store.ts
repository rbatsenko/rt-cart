import { configureStore } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

const persistedState = localStorage.getItem('reduxPersistedState');

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState ? JSON.parse(persistedState) : {},
});

store.subscribe(() => {
  localStorage.setItem('reduxPersistedState', JSON.stringify(store.getState()));
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const newRootReducer = require('./rootReducer').default;

    store.replaceReducer(newRootReducer);
  });
}

export type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector = createSelectorHook<RootState>();

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
