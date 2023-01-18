import React from 'react'
// using props with a button to change it's content dynamically.
const Button = (props) => {
  let name = props.name
  let location = props.location

  return (
    <>
      <div>buttons changing using props</div>
      <button>{name} {location}</button>
    </>
  )
}


{/* events handlers in react */ }
// when not parametised
const Buttons = () => {
  const chief = () => {
    return console.log(`good morning`)
  }
  return (
    <>
      <div>Events handlers(functions:OnClick) in react without a parameter</div>
      <button onClick={chief}>chief</button>
    </>
  )
}

export default Button
export { Buttons }

