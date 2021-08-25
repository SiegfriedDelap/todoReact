/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/jsx-key */

//spread object
//{...item} взять каждое свойство из айтем и передать его в качестве атрибута вместе со значение в лист айтем
//эквивалентно label={item.label}; important = {item.important}

import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';



const TodoList = ({todo, onDeleted, onToggleImportant, onToggleDone}) =>{
	const elements = todo.map((item)=>{
		const { id, ...itemProps} = item;

		return(
			<li key={id} className = "list-group-item">
				<TodoListItem 
					{...itemProps}
					onDeleted={()=> onDeleted(id)}
					onToggleImportant={()=>onToggleImportant(id)}
					onToggleDone={()=>onToggleDone(id)}
				/> 
			</li>
		);
		
	});

	return(
		<ul className = "list-group todo-list">
			{elements}
		</ul>
	);
};

export default TodoList;