import React from "react";
import styles from "./OldMonth.module.scss";

type Props = {
  children?: React.ReactNode;
};
export const OldMonth: React.FC<Props> = ({ children }) => (
  <text
    x='585.4'
    y='100.8893'
    width='200px'
    className={styles.OldMonth}
    textAnchor='end'
  >
    {children}
  </text>
);
