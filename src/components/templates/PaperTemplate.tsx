import Head from "next/head";
import React from "react";
import { consts } from "../../lib/app/consts";
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
      <title>
        {title} - {consts.AppName}
      </title>
    </Head>
    <div className={styles.PaperTemplate}>{children}</div>
  </>
);
