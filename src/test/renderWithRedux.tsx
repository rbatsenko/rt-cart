import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { ComponentType, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export const renderWithRedux = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  const Wrapper = ({ children }: { children: ReactNode }) => <Provider store={store}>{children}</Provider>;

  return render(ui, { wrapper: Wrapper as ComponentType, ...options });
};
