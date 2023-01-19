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

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
    </div>
  );
}

export default App;
