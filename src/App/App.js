import './App.css';
import Home from '../Home/home';
import NavBar from '../NavBar/NavBar';
import Contact from '../Contact/Contact';
import RealEstateListing from '../RealEstate/RealEstateListing';
import About from '../About/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/RealEstateListings">
          <RealEstateListing/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
      
      <Home/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
