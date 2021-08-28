import React, { Component } from 'react';
import SwapiService from '../../services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './person-details.css';

export default class PersonDetails extends Component {

  swdb = new SwapiService();

  state = {
    person: null,
    loading: false,
  };

 
  componentDidMount(){
    this.updatePerson()
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.updatePerson();
    }
  }

  onPersonLoaded = (person)=>{
    this.setState({
      person,
      loading: false,
	  error: false
    });
  };

  onError=()=>{
	this.setState({
		error: true,
		loading: false
	})
  }

  updatePerson(){
    const {personId} = this.props;
    //опредлеяем если нулл то ничего не делаем
    if(!personId){
      return;
    }

    this.setState({
      loading: true
    });

    this.swdb.getPerson(personId)
    .then(this.onPersonLoaded)
	.catch(this.onError);
    
  }

  render() {

    const {loading, person, error} = this.state;

	 

    const notSelected = !person;
    const hasData = person && !(loading||error);

    const hint = notSelected ? <span>Select a person from a list</span> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PersonView person={person} /> : null;

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

const PersonView = ({person}) => {
	const {id, name, gender, birthYear, eyeColor} = person;
	return(
		<React.Fragment>
			
				<img 
				className="person-image"
				src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
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
