import React from "react";
import styles from "./Month.module.scss";

type Props = {
  position: { x: number; y: number };
  children?: React.ReactNode;
};
export const Month: React.FC<Props> = ({ position, children }) => (
  <text x={position.x} y={position.y} className={styles.Month}>
    {children}
  </text>
);
