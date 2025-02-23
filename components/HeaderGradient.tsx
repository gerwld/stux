import React, { FC } from 'react'

type GradientObject = Record<string, string>;

type Props = {
  keyProp?: keyof typeof colors;
};

const colors:GradientObject = {
  main: "radial-gradient(ellipse at top center, #40527D 0%, #24283f 50%, #1A1C2D 70%, #1A1C2D 100%)",
  igplus: "linear-gradient(to top, transparent -100%, var(--background) 10%, transparent 20%), radial-gradient(at center top, rgb(66, 55, 110) 0%, rgb(45, 38, 72), rgb(29, 31, 50), rgba(25, 27, 44, 0.5))"
}

const HeaderGradient:FC<Props> = ({keyProp = "main"}) => {

  return (
    <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: colors[keyProp],
        zIndex: -1,
        pointerEvents: "none",
        userSelect: "none"
    }}/>
  )
}

export default HeaderGradient