import classNames from "classnames";
import React from "react";
import styles from "./Year.module.scss";

type Props = {
  children?: React.ReactNode;
};
export const Year: React.FC<Props> = ({ children }) => (
  <text x='13.4457' y='100.8893' className={classNames(styles.Year)}>
    {children}
  </text>
);
