import React from "react"

const SimpleHero = (props) => {
  return (
    <header className={"defaultHero"}>
      {props.children}
    </header>
  )
}

export default SimpleHero
