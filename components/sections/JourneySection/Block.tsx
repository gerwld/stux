import React, { FC } from "react";
import { JourneyBlock } from "./JourneySection";
import style from "./style.module.css";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Image from "next/image";


const Block: FC<JourneyBlock> = ({ iconUrl, desc, value, n18 }) => {
  const t = useTranslations("JourneySection");
  return (
    <article className={clsx("jblock", style.block)}>
      <h3 className={style.value}>{value}</h3>
      <p className={style.desc}>{t(n18)}</p>
      <div className={clsx("jblock_icon", style.icon)}>
        <Image width={90} height={90} src={iconUrl} alt={desc} />
      </div>
    </article>
  );
};

export default Block;
