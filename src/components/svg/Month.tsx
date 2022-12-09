import React from "react";
import styles from "./Month.module.scss";

type Props = {
  children?: React.ReactNode;
};
export const Month: React.FC<Props> = ({ children }) => (
  <text x='135.5832' y='100.8893' className={styles.Month}>
    {children}
  </text>
);
