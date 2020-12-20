import { CartContainer } from '../../shared/Cart/Cart.container';
import { Summary } from './Summary/Summary';
import styles from './Home.module.css';

export const Home = () => (
  <div className={styles.page}>
    <CartContainer />
    <Summary />
  </div>
);
