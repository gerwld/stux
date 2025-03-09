import React, { FC } from "react";
import { JourneyBlock } from "./JourneySection";
import style from "./style.module.css";
import { useTranslations } from "next-intl";


const Block: FC<JourneyBlock> = ({ iconUrl, desc, value, n18 }) => {
  const t = useTranslations("JourneySection");
  return (
    <article className={style.block}>
      <h3 className={style.value}>{value}</h3>
      <p className={style.desc}>{t(n18)}</p>
      <div className={style.icon}>
        <img src={iconUrl} alt={desc} />
      </div>
    </article>
  );
};

export default Block;
