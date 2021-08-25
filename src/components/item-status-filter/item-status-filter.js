/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
	render() {
		return(
			<div> 
				<button type="button"
					className="btn btn-info">All</button>
				<button type="button"
					className="btn btn-outline-secondary">Active</button>
				<button type="button"
					className="btn btn-outline-secondary">Done</button>
			</div>
		);
	}
}