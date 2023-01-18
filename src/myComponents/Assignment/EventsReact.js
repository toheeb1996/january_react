import React from 'react'

const EventsReact = () => {
  const phone = (e) =>{
    // return console.log(e.target)
    return console.log(e.target.innerHTML)
  }

  return (
    <>
    <div>Events(TARGET) in React</div>
    <button onClick={phone}>phone</button>
    </>
  )
}
export default EventsReact