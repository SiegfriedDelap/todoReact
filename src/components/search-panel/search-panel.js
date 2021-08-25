import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		term:''
	};

	//на каждое нажатие кнопки вызывается серч чендж

	onSearchChange=(e)=>{
		const term = e.target.value;
		this.setState({term});
		this.props.onSearchChange(term);
	};

	render(){
		return(
			<input 
				type="text" 
				className = "form-control search-panel" 
				placeholder="search"
				value = {this.state.term}
				onChange={this.onSearchChange}
			></input>
		);
	}
}