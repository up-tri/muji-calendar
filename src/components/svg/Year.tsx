import classNames from "classnames";
import React from "react";
import styles from "./Year.module.scss";

type Props = {
  position: { x: number; y: number };
  children?: React.ReactNode;
};
export const Year: React.FC<Props> = ({ position, children }) => (
  <text x={position.x} y={position.y} className={classNames(styles.Year)}>
    {children}
  </text>
);
