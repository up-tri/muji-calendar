import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {};
export const Header: React.FC<HeaderProps> = () => (
  <Box marginBottom='20px' borderBottom='1px' borderColor='gray.300'>
    <Heading textAlign='center' paddingY='20px'>
      カレンダー生成する君
    </Heading>
  </Box>
);
