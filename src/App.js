import logo from './logo.svg';
import './App.css';
import School from './myComponents/School/School';
// import { Book, Biro} from './myComponents/School/School';

// import School, {Book, Biro}from './myComponents/School/School';
import ListsOfSchools from './myComponents/School/ListsOfSchools';

// wednesday class
import Delete from './myComponents/School/Delete';
import Student from './myComponents/School/Student';

import Button from './myComponents/Assignment/Button'
import { Buttons } from './myComponents/Assignment/Button';

import ParamButton from './myComponents/Assignment/ParamButton';
import EventsReact from './myComponents/Assignment/EventsReact';
import OnChange from './myComponents/Assignment/OnChange';
import Desructuring from './myComponents/Form/Desructuring';
import Register from './myComponents/Form/Register';
import Login from './myComponents/Form/Login';

function App() {
  // monday january 23
  const [lau, top, coding] = ListsOfSchools;
  // <p>Destructuring:  means unpacking the items from the array and be able to use it elsewhere. the items are collected </p>  // object destructuring
  const { name, location } = coding;

  // conditional rendering in react
  var num = 9;
  // if (num == 9) {
  //   console.log ("nine")
  // } else {
  //   console.log("not nine")
  // }

  return (
    <div className="App">
      <School name="U.I" location="Ibadan" />
      <School name="Lautech" location="Ogbomoso" />
      <School name="Unilag" location="Lagos" />
      <School name="O.A.U" location="Osun" />

      {/* TUESDAY CLASS */}
      {/* <ListsOfSchools /> I should not render it here again bcos it's already imported in school.js and school.js is already rendered here. but I must still import it here(app.js) too*/}

      {/* {ListsOfSchools.map((school)=>{console.log(school.name)})} */}

      {
        // ListsOfSchools.map((school)=>{console.log(school.location)})
        // ListsOfSchools.map((school)=>{console.log(school.name, school.location)})
        console.log(ListsOfSchools)
      }

      {/* <Book />
      <Biro /> */}

      {/* WEDNESDAY CLASS */}
      <Delete />
      {/* <Student school="O.A.U" name="fatimah" status="graduate" />
      <Student school="lautech" name="ayomide" status="undergrad" />
      <Student school="U.i" name="olamide" status="postgrad" /> */}
      {/* <Button location="text me"/> */}
      <Student />

      <Button location="text me" />
      <Buttons />
      <EventsReact />
      <ParamButton />
      <OnChange />
      <Register />
      <Login />
      <Desructuring />

      {/* monday 23 */}
      {/* array destructuring; we want to get hold  of lautech and ui. we can use any name to unpack it */}
      {console.log(lau,top, coding)}

      {/* object destructuring. we can only use its key to unpack it */}
      {console.log(name)}

{/* conditional rendering in react IF/ELSE*/}
{num == 9 ? console.log("nine") : console.log ("not nine")}
    </div>
  );
}

export default App;
