import Head from "next/head";
import React from "react";
import styles from "./PaperTemplate.module.scss";

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
    <div className={styles.PaperTemplate}>{children}</div>
  </>
);
