import Head from "next/head";
import React from "react";

type PaperTemplateProps = {
  children: React.ReactNode;
};
export const PaperTemplate: React.FC<PaperTemplateProps> = ({ children }) => (
  <>
    <Head>{/*  */}</Head>
    <div>{children}</div>
  </>
);
