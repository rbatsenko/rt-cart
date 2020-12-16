import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  test('loads and displays items', async () => {
    render(<App />);

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(3);
  });
});
