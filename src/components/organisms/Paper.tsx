import React from "react";
import styles from "./Paper.module.scss";

type Props = {
  children?: React.ReactNode;
};

export const Paper: React.FC<Props> = (props) => (
  <div className={styles.Paper}>{props.children}</div>
);
