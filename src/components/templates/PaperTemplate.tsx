import Head from "next/head";
import React from "react";

type PaperTemplateProps = {
  title: string;
  children: React.ReactNode;
};
export const PaperTemplate: React.FC<PaperTemplateProps> = ({
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>{children}</div>
  </>
);
