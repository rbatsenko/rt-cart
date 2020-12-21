import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => (
  <Box mt="65px" py={8} width="100%">
    {children}
  </Box>
);
