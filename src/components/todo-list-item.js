/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import React from "react";

const TodoListItem = ({label, important = false}) => {

	const style ={
		color: important ? 'tomato' : 'black'
	};

	return (
		<span style={style}>{label}</span>
	);
};

export default TodoListItem;