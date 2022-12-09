import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";

type RootTemplateProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};
export const RootTemplate: React.FC<RootTemplateProps> = ({
  header,
  children,
  footer,
}) => (
  <ChakraProvider>
    <Flex
      backgroundColor='gray.50'
      minHeight='100vh'
      width='100vw'
      direction='column'
      justifyContent='center'
    >
      <Box>{header}</Box>
      <Box flex={1}>{children}</Box>
      <Box>{footer}</Box>
    </Flex>
  </ChakraProvider>
);
