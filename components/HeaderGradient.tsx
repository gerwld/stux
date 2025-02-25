import { ColorSchemeType } from '@/app/schemas/schemas';
import React, { FC } from 'react'

// TODO: Drop that component, and use schemas instead

type GradientObject = Record<ColorSchemeType, string>;

type Props = {
  keyProp?: ColorSchemeType;
  withTexture?: boolean;
};

const colors:GradientObject = {
  MAIN: "radial-gradient(ellipse at top center, #40527D 0%, #24283f 50%, #1A1C2D 70%, #1A1C2D 100%)",
  PURPLE: "linear-gradient(to top, transparent -100%, var(--background) 10%, transparent 20%), radial-gradient(at center top, rgb(66, 55, 110) 0%, rgb(45, 38, 72), rgb(29, 31, 50), rgba(25, 27, 44, 0.5))",
}

const HeaderGradient:FC<Props> = ({keyProp = "MAIN", withTexture}) => {

  return (
    <>
    <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: colors[keyProp] || colors["MAIN"],
        zIndex: -2,
        pointerEvents: "none",
        userSelect: "none",
        opacity: 0.9
    }}/>
    {withTexture ?  
    <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: 'url("/texture-1.png")',
        backgroundPosition: '0% 0%',
        backgroundSize: '100% 100%',
        zIndex: -1,
        pointerEvents: "none",
        userSelect: "none"
    }}/> : ''}
    </>
  )
}

export default HeaderGradient