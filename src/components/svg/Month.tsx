import React from "react";

type Props = {
  className: string;
  children?: React.ReactNode;
};
export const Month: React.FC<Props> = ({ children, className }) => (
  <text x='135.5832' y='100.8893' className={className}>
    {children}
  </text>
);
