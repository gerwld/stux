import React, { FC } from "react";
import HeaderGradient from "./HeaderGradient";

type PageTitleProps = {
  title: string;
};

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="content_wrapper">
      <HeaderGradient/>
      <h1 className="page_title">{title}</h1>
    </div>
  );
};

export default PageTitle;
