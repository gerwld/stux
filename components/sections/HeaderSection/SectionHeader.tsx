import React, { FC } from "react";
import style from "./style.module.css";

interface SectionHeaderProps {
  title: string;
  dashTitle: string;
  desc?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, dashTitle, desc }) => {
  if(!title) return "";
  return (
    <div className={'content_wrapper ' + style.header}>
      <span className={style.dash} id={dashTitle.split(" ").join("_")}>
        {dashTitle}
      </span>
      <h2 className={style.title}>{title}</h2>
      {desc ? <p className={style.desc}>{desc}</p> : ""}
    </div>
  );
};

export default SectionHeader;
