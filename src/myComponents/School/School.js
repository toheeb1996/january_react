import React from 'react'
import ListsOfSchools from './ListsOfSchools';
// import Button from '../Assignment/Button';

const School = (props) => {
  let name = props.name;
  let location = props.location;
  return (
    <>
      <div>
        {/* <p>The name of my school is {name} and it's located at {location} </p> */}
        {/* {console.log(ListsOfSchools)} */}
        {/* {console.log(props)} */}
      </div>

      {console.log(props)}
      {/* {ListsOfSchools.map((tola)=>{console.log({tola.name})})} */}

      {console.log(ListsOfSchools)}

      {ListsOfSchools.map((school)=>{return <p>{school.name}</p>})}
      {/* <Button /> */}
    </>
  )
}

// // const Book = () => {}
// function Book() {
//   return (
//     <div>
//       <h1>this is a book</h1>
//     </div>
//   )

// }

// // const Biro = () => {}
// function Biro(props) {
//   return (
//      <div>
//       <p>this is a pen</p>
//     </div>

//   )
// }

export default School
// export {Book, Biro};

