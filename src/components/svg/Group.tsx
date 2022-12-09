import React from "react";

type Props = {
  children?: React.ReactNode;
};
export const Group: React.FC<Props> = (props) => <g>{props.children}</g>;
