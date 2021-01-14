import * as React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useThemeManager } from "../../state/user/hooks";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const [theme] = useThemeManager()
  
  return (
    <>
      <Flex borderBottom='1px' borderBottomColor={`border.${theme}`} >
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