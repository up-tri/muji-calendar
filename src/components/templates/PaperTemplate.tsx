import React from "react";

type PaperTemplateProps = {
  children: React.ReactNode;
};
export const PaperTemplate: React.FC<PaperTemplateProps> = ({ children }) => (
  <div>{children}</div>
);
