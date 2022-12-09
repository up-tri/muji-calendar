import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { consts } from "../../lib/app/consts";

type HeaderProps = {
  pageTitle?: string;
};
export const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const titleText = pageTitle
    ? `${pageTitle} - ${consts.AppName}`
    : consts.AppName;
  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Box marginBottom='20px' borderBottom='1px' borderColor='gray.300'>
        <Heading textAlign='center' paddingY='20px'>
          カレンダー生成する君
        </Heading>
      </Box>
    </>
  );
};
