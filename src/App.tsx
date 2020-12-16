import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { api } from './api/api';

type Item = {
  name: string;
  cost: number;
};

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api.items);
      const data = (await response.json()) as Item[];

      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {items.map(item => (
            <li key={item.name}>
              Name: {item.name}, Cost: {item.cost}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};
