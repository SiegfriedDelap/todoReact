import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services';



import './app.css';

export default class App extends Component {

  swdb = new SwapiService();

  state = {
    showRandomPlanet: true
  }

  toggleRandomPlanet = () =>{
    this.setState((state)=>{
      return{
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

 

  render(){

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="container">
        <Header />
        {randomPlanet}
        <button className="btn btn-dark mb-4" onClick={this.toggleRandomPlanet}>Toggle Random Planet </button>
          <PeoplePage/>

          <div className="row">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swdb.getAllPlanets}
                        renderItem={({name, diameter}) => `${name} (${diameter})`}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>


          <div className="row">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swdb.getAllStarships}
                        renderItem={({name, length}) => `${name} (${length})`}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>

        </div>
      
    );
  }
};
