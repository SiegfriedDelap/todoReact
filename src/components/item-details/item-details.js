import React, { Component } from 'react';
import SwapiService from '../../services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';

export default class ItemDetails extends Component {

  swdb = new SwapiService();

  state = {
    item: null,
    loading: false,
    image:null
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
      image: getImg(item),
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
    const {itemId, getData, getImg} = this.props;
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

	 

    const notSelected = !item;
    const hasData = item && !(loading||error);

    const hint = notSelected ? <span>Select an item from a list</span> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <ItemView item={item} /> : null;

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

const ItemView = ({item, state:{image}}) => {
	const {name, gender, birthYear, eyeColor} = item;

  
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
					<li className="list-group-item">
					<span className="term">Gender</span>
					<span>{gender}</span>
					</li>
					<li className="list-group-item">
					<span className="term">Birth Year</span>
					<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
					<span className="term">Eye Color</span>
					<span>{eyeColor}</span>
					</li>
				</ul>
				</div>
			
		</React.Fragment>
	)
}
