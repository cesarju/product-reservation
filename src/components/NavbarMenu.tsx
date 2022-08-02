import { Text, Flex } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex gap="4">
      <Text fontSize="xl">Home</Text>
      <Text fontSize="xl">Sales</Text>
      <Text fontSize="xl">Booking</Text>
    </Flex>
  );
};
