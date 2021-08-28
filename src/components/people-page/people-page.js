import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services';

import './people-page.css';

export default class PeoplePage extends Component {

  swdb = new SwapiService();

    state={
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError:true
        });
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id,
          
        });
      };
    
    render(){
        if(this.state.hasError){
            return <ErrorIndicator />
        }

        return(
            <div className="row">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swdb.getAllPeople}
                        renderItem={({name, birthYear}) => `${name} (${birthYear})`}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
        )
    }
}