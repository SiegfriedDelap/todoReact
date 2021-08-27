import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services';
import Spinner from '../spinner';


export default class ItemList extends Component {

	swdb = new SwapiService();

	state = {
		peopleList : null
	};

	

	componentDidMount(){
		this.swdb.getAllPeople()
		.then((peopleList) => {
			this.setState({
				peopleList
			});
		})
		.catch( (error) => ('We catch error while updating the person:' + error) )
	}

	renderItems(arr){
		return arr.map(({id, name})=>{
			return(
				<li className="list-group-item"
					key={id}
					onClick={()=>this.props.onItemSelected(id)}>
					{name}
				</li>
			)
		})
	}

	render() {

		const {peopleList} = this.state;

		if(!peopleList){
			return <Spinner />
		}

		
		const items = this.renderItems(peopleList);

		return (
			 
				<ul className="item-list list-group">
					{items}
				</ul>		
		);
	}
}