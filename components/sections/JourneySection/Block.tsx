import React, { FC } from "react";
import { JourneyBlock } from "./JourneySection";
import style from "./style.module.css";


const Block: FC<JourneyBlock> = ({ iconUrl, desc, value }) => {
  return (
    <article className={style.block}>
      <h3 className={style.value}>{value}</h3>
      <p className={style.desc}>{desc}</p>
      <div className={style.icon}>
        <img src={iconUrl} alt={desc} />
      </div>
    </article>
  );
};

export default Block;
