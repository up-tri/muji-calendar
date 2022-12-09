import React from "react";
import styles from "./PreviewNote.module.scss";

type Props = {
  children?: React.ReactNode;
};

export const PreviewNote: React.FC<Props> = (props) => (
  <div className={styles.PreviewNote}>{props.children}</div>
);
