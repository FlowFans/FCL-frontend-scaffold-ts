import * as React from "react";

import { Box, Flex, Spacer, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const {colorMode} = useColorMode()
  
  return (
    <>
      <Flex borderBottom='1px' borderBottomColor={`border.${colorMode}`} >
        <Box p='4'>
          logo
        </Box>
        <Spacer />
        <Box p='4'>
          Title
        </Box>
        <Spacer />
        <Box p='4' >
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </>
  );
};

export default Header