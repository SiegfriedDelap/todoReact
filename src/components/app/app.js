import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
// import ItemList from '../item-list';
// import ItemDetails from '../item-details';
import SwapiService from '../../services';
import Row from '../row';



import './app.css';
import ItemDetails from '../item-details';

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

    const {getPerson, getStarship} = this.swdb;

    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const personDetails = (
      <ItemDetails 
      itemId={11} 
      getData={getPerson}
      />
    );

    const starshipDetails =(
      <ItemDetails 
      itemId={5}
      getData={getStarship}
       />
    );

    return (
      <div className="container">
        <Header />
        {/* {randomPlanet}
        <button className="btn btn-dark mb-4" onClick={this.toggleRandomPlanet}>Toggle Random Planet </button>
          <PeoplePage/> */}

          <Row
            left={personDetails}
            right={starshipDetails}
           />

         
        </div>
      
    );
  }
};
