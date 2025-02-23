import React, { FC } from "react";
import { FeaturesBlock } from "./FeaturesSection";
import style from "./style.module.css";
import TextWithFragment from "@/components/TextWithFragments";

const Block: FC<FeaturesBlock> = ({ iconUrl, desc, name }) => {
  return (
    <article className={style.block}>
      <div className={style.header}>
        <div className={style.icon}>
          <img src={iconUrl} alt={name} />
        </div>
        <h3 className={style.title}><TextWithFragment text={name}/></h3>
      </div>
      <p className={style.desc}><TextWithFragment text={desc}/></p>
    </article>
  );
};

export default Block;
