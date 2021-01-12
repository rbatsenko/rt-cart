import { Container } from '@chakra-ui/react';
import { Home } from './page/Home/Home';
import { Navbar } from './shared/Navbar/Navbar';

export const App = () => (
  <>
    <Navbar />
    <Container centerContent>
      <Home />
    </Container>
  </>
);
