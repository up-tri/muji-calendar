import React from "react";

type Props = {
  className: string;
  children?: React.ReactNode;
};
export const Year: React.FC<Props> = ({ children, className }) => (
  <text x='13.4457' y='100.8893' className={className}>
    {children}
  </text>
);
