import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';





export default class PeoplePage extends Component {

	swdb = new SwapiService();

		state={
				selectedPerson: null,
				hasError: false
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

				const itemList = (
					<ItemList onItemSelected={this.onPersonSelected}
							  getData={this.swdb.getAllPeople}
							  >
							  {({name, birthYear}) => `${name} (${birthYear})`}
					</ItemList>
				);

				const itemDetails = (
					<ItemDetails personId={this.state.selectedPerson}/>
				);

				return(
					<ErrorBoundry>
						<Row left = {itemList} right = {itemDetails} />
					</ErrorBoundry>
				)
		}
}