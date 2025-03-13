import { ColorSchemeType } from '@/app/schemas/schemas';
import React, { FC } from 'react'

// TODO: Drop that component, and use schemas instead

type GradientObject = Record<ColorSchemeType, string>;

type Props = {
  keyProp?: ColorSchemeType;
  withTexture?: boolean;
};

const colors:GradientObject = {
  // MAIN: "radial-gradient(ellipse at top center, #40527D 0%, #24283f 50%, #1A1C2D 70%, #1A1C2D 100%)",
  MAIN: "radial-gradient(at top, #364568 0%, #1b1f33 50%, #181925 70% 100%)",
  // PURPLE: "linear-gradient(to top, transparent -100%, var(--background) 10%, transparent 20%), radial-gradient(at center top, rgb(66, 55, 110) 0%, rgb(45, 38, 72), rgb(29, 31, 50), rgba(25, 27, 44, 0.5))",
  PURPLE: "linear-gradient(to top, transparent -100%, var(--background) 10%, transparent 20%), radial-gradient(at center top, rgb(49, 40, 81) 0%, rgb(36, 30, 59), rgb(23, 25, 41), rgba(20, 22, 36, 0.5))",
}

const HeaderGradient:FC<Props> = ({keyProp = "MAIN", withTexture}) => {

  return (
    <>
    <div className='hg_product' style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: colors[keyProp] || colors["MAIN"],
        zIndex: -2,
        pointerEvents: "none",
        userSelect: "none",
        opacity: 0.8
    }}/>
    {withTexture ?  
    <div className='texture_lbw'/> : ''}
    </>
  )
}

export default HeaderGradient