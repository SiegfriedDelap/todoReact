/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/jsx-key */

//spread object
//{...item} взять каждое свойство из айтем и передать его в качестве атрибута вместе со значение в лист айтем
//эквивалентно label={item.label}; important = {item.important}

import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({todo}) =>{
	const elements = todo.map((item)=>{
		return(
			<li>
				<TodoListItem {...item}/> 
			</li>
		);
		
	});

	return(
		<ul>
			{elements}
		</ul>
	);
};

export default TodoList;