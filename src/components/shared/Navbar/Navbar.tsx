import { HamburgerIcon } from '@chakra-ui/icons';
import { Container, Flex, Heading, IconButton } from '@chakra-ui/react';

export const Navbar = () => (
  <Flex
    alignItems="center"
    backgroundColor="white"
    borderTopColor="teal.400"
    borderTopWidth={4}
    borderTopStyle="solid"
    borderBottomColor="gray.100"
    borderBottomWidth={1}
    position="fixed"
    zIndex={5}
    width="100%"
    height="65px"
  >
    <Container>
      <Flex justifyContent="space-between">
        <Heading size="md" lineHeight={1.5}>
          Cart App
        </Heading>
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Open menu"
          size="sm"
          icon={<HamburgerIcon w={4} h={4} />}
        />
      </Flex>
    </Container>
  </Flex>
);
