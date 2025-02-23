import React from 'react'

const HeaderGradient = () => {
  return (
    <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: "radial-gradient(ellipse at top center, #40527D 0%, #24283f 50%, #1A1C2D 70%, #1A1C2D 100%)",
        zIndex: -1,
        pointerEvents: "none",
        userSelect: "none"
    }}/>
  )
}

export default HeaderGradient