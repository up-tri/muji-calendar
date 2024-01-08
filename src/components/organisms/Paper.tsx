import classNames from "classnames";
import React from "react";
import styles from "./Paper.module.scss";

type Props = {
  isTate: boolean;
  children?: React.ReactNode;
};

export const Paper: React.FC<Props> = (props) => (
  <div
    className={classNames({
      [styles.Paper]: true,
      [styles["Paper--yoko"]]: !props.isTate,
    })}
  >
    {props.children}
  </div>
);
