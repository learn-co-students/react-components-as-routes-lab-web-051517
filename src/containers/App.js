import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

// const Navbar = () =>
//   <div>
//     <NavLink to="/" exact>Home</NavLink>
//     <NavLink to="/movies" exact>Movies</NavLink>
//     <NavLink to="/directors" exact>Directors</NavLink>
//     <NavLink to="/actors" exact>Actors</NavLink>
//   </div>

// const Home = () => <h1>Home</h1>;
// const Movies = () => <h1>About</h1>;
// const Directors = () => <h1>About</h1>;
// const Actors = () => <h1>About</h1>;



const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" render={Home} />
        <Route exact path="/movies" render={Movies} />
        <Route exact path="/directors" render={Directors} />
        <Route exact path="/actors" render={Actors} />
      </div>
    </Router>
  );
};

export default App
