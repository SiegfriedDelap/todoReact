import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';


import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null
  }

  toggleRandomPlanet = () =>{
    this.setState((state)=>{
      return{
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render(){

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container">
        <Header />
        {randomPlanet}
        <button className="btn btn-dark mb-4" onClick={this.toggleRandomPlanet}>Toggle Random Planet </button>
          <div className="row">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
        </div>
      
    );
  }
};
