import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={Homepage} exact/>
      <Route path="/beers" component={AllBeers} exact/>
      <Route path="/random-beer" component={RandomBeer} exact/>
      <Route path="/new-beer" component={NewBeer} exact/>
      <Route path="/beers/:beerId" component={BeerDetails} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;