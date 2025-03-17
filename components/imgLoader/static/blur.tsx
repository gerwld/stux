import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import style from '../style.module.scss';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

type StaticPlaceholderBlurProps = {
  src: string | StaticImageData,
  width?: number,
  height?: number,
  alt?: string 
}

const blur:FC<StaticPlaceholderBlurProps> = async ({src, width, height, alt}) => {

  const buffer = await fs.readFile(`./public/${src}`);
  const {base64} = await getPlaiceholder(buffer);

  return (
        <div className={style.imageContainer}>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt ? alt : 'Image'}
                placeholder='blur'
                blurDataURL={base64}
            />
        </div>
  )
}

export default blur