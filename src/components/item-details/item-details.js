import React, { Component } from 'react';
import SwapiService from '../../services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';

const Record = ({item, field, label}) => {
  return(
	<li className="list-group-item">
		<span className="term">{label}</span>
		<span>{item[field]}</span>
	</li>
  );
};

export {
	Record
}

export default class ItemDetails extends Component {

  swdb = new SwapiService();

  state = {
	item: null,
	loading: false,
  };

 
  componentDidMount(){
	this.updateItem()
  }

  componentDidUpdate(prevProps){
	if(this.props.personId !== prevProps.personId){
	  this.updateItem();
	}
  }

  onItemLoaded = (item)=>{
	this.setState({
	  item,
	  loading: false,
		error: false,
	  
	});
  };

  

  onError=()=>{
	this.setState({
		error: true,
		loading: false
	})
  }

  updateItem(){
	const {itemId, getData} = this.props;
	//опредлеяем если нулл то ничего не делаем
	if(!itemId){
	  return;
	}

	this.setState({
	  loading: true
	});

	getData(itemId)
	.then(this.onItemLoaded)
	.catch(this.onError);
	
  }

  render() {

	const {loading, item, error} = this.state;
	const {children} = this.props;

	 

	const notSelected = !item;
	const hasData = item && !(loading||error);

	const hint = notSelected ? <span>Select an item from a list</span> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = hasData ? <ItemView item={item} children={children} /> : null;

	const errorMsg = error ? <ErrorIndicator/> : null;

	return (
		<div className="person-details card">
			{errorMsg}
			{hint}
			{spinner}
			{content}
		</div>
	)
  }
}

const ItemView = ({item, children}) => {
	const {name, image} = item;
	

  
	return(
		<React.Fragment>
			
				<img 
				className="person-image"
				src={image} 
				alt ="person" 
				/>

				<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{
						React.Children.map(children, (child)=>{
							return React.cloneElement(child, {item})
						})
					}
					{/* {children} */}
				</ul>
				</div>
			
		</React.Fragment>
	)
}
