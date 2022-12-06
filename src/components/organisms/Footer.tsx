import { Box } from "@chakra-ui/react";
import React from "react";
import { baseStyle } from "./../baseStyle";

type FooterProps = {};
export const Footer: React.FC<FooterProps> = () => (
  <Box
    fontSize={baseStyle.fontsize.sm}
    marginTop='20px'
    borderTop='1px'
    borderColor='gray.300'
    paddingY='10px'
    color='gray.500'
    textAlign='center'
  >
    &copy; 2022 up-tri.
  </Box>
);
