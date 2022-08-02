import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Navbar } from "./NavbarMenu";
interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <Box bg="black" w="100%" p={4} color="white" display="">
      <Heading>
        {title}
        <Navbar />
      </Heading>
    </Box>
  );
};
