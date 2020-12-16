import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Item = {
  name: string;
  cost: number;
}

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://d158uqe6ce.execute-api.eu-central-1.amazonaws.com/items');
      const data = await response.json() as Item[];

      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {items.map(item => <li>Name: {item.name}, Cost: {item.cost}</li>)}
        </ul>
      </header>
    </div>
  );
};
