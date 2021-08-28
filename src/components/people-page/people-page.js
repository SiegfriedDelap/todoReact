import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services';
import Row from '../row';

import './people-page.css';

class ErrorBoundry extends Component {

	state = {
		hasError: false
	};

	componentDidCatch(){
		this.setState({
				hasError:true
		});
	}

	render(){

		if(this.state.hasError){
			return <ErrorIndicator/>
		}
		
		return this.props.children;
	}
}



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

				const personDetails = (
					<PersonDetails personId={this.state.selectedPerson}/>
				);

				return(
					<ErrorBoundry>
						<Row left = {itemList} right = {personDetails} />
					</ErrorBoundry>
				)
		}
}