import logo from './logo.svg';
import './App.css';
import School from './myComponents/School/School';
// import { Book, Biro} from './myComponents/School/School';

// import School, {Book, Biro}from './myComponents/School/School';
import ListsOfSchools from './myComponents/School/ListsOfSchools';
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
      <School name = "U.I" location = "ibadan"/>
      <School name = "Lautech" location = "ogbomoso"/>
      <School name = "Unilag" location = "lagos"/>
      <School name = "O.A.U" location = "osun"/>
      {/* <ListsOfSchools /> */} i should not render it here again bcos 


      {
        ListsOfSchools.map((school)=>{console.log(school.name)})
        // ListsOfSchools.map((school)=>{console.log(school.location)})
      //  console.log(ListsOfSchools)

      }

      {/* <Book />
      <Biro /> */}
    </div>
  );
}

export default App;
