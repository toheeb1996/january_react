import React from 'react'

const onChange = () => {
  const change = () => {
    console.log("one")
  }

  return (
    // <div onChange={change}>
    // </div>

    <>
          <div>Events handlers(functions:OnChange) in react.</div>

      <input onChange={change} type="text" />
    </>
    // </div>
  )
}

export default onChange