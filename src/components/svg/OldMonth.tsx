import React from "react";
import styles from "./OldMonth.module.scss";

type Props = {
  position: { x: number; y: number };
  children?: React.ReactNode;
};
export const OldMonth: React.FC<Props> = ({ position, children }) => (
  <text
    x={position.x}
    y={position.y}
    width='200px'
    className={styles.OldMonth}
    textAnchor='end'
  >
    {children}
  </text>
);
