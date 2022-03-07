import React from 'react';
import LogRocket from 'logrocket';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import PokemonList from '../container/PokemonList';
import ShowPokemon from '../container/ShowPokemon';
import '../styles/App.css';

LogRocket.init('y02gmu/proyectodepruebag66');

function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav">
          <Link to="/"><h1>POKEDEX</h1></Link>
        </div>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/:id" component={ShowPokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
