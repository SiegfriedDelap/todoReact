import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {

	state = {
		label:''
	};

	onLabelChange =(e)=>{
		this.setState({
			label:e.target.value
		});
	};

	onSubmit = (e) =>{
		e.preventDefault();
		this.props.onAddItem(this.state.label);
		this.setState({
			label:''
		});
	};

	render(){
		return(
			<form 
				className='add-item d-flex'
				onSubmit={this.onSubmit}>
				
				<input 
					type="text"
					className="form-control"
					onChange={this.onLabelChange}
					placeholder="To do"
					value={this.state.label}></input>
				<button
					className="btn btn-outline-secondary">Add element</button>
			</form>
		);
	}

}