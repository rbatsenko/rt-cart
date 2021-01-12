import { Divider } from '@chakra-ui/react';
import { CartContainer } from '../../shared/Cart/Cart.container';
import { Page } from '../../shared/Page/Page';
import { Summary } from './Summary/Summary';

export const Home = () => (
  <Page>
    <CartContainer />
    <Divider mt={12} mb={8} />
    <Summary />
  </Page>
);
