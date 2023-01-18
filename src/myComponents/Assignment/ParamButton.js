import React from 'react'

// {case 2 when our event(function) is parametised}
const ParamButton = () => {

  const slot = (name) => {
    return console.log(`good morning ${name}`)
  }

  return (
    <>
      <div>Events handlers(functions:OnClick) in react when parametised</div>
      <button onClick={() => { slot("ibrahim") }}>slot</button>
    </>
  )
}

export default ParamButton