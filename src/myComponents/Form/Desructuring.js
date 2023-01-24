import React from 'react'

const Desructuring = () => {
    // monday january 23
    const [lau, top, coding] = ListsOfSchools;
    // <p>Destructuring:  means unpacking the items from the array and be able to use it elsewhere. the items are collected to form another variable that can be reused </p>  // object destructuring
  //  the below is object destructuring
    const { name, location } = coding;
  
    // conditional rendering in react
    var num = 9;
    // if (num == 9) {
    //   console.log ("nine")
    // } else {
    //   console.log("not nine")
    // }
  
  return (
    <div>

      {/* monday 23 */}
      {/* array destructuring; we want to get hold  of lautech and ui. we can use any name to unpack it */}
      {console.log(lau,top, coding)}

      {/* object destructuring. we can only use its key to unpack it */}
      {console.log(name)}

{/* conditional rendering in react IF/ELSE*/}
{num == 9 ? console.log("nine") : console.log ("not nine")}
    </div>
  )
}

export default Desructuring