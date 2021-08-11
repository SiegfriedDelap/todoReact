/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import './app.css';


const App = () => {
	const todoData=[
		{label:'Deily hard work', important:false, id:1},
		{label:'Everyday hard work', important:true, id:2},
		{label:'eat something', important:false, id:3}
	];

	return(
		<div className="todo-app">
			<AppHeader toDo={1} done={3}></AppHeader>
			<div className="top-panel d-flex">
				<ItemStatusFilter></ItemStatusFilter>
				<SearchPanel></SearchPanel>
			</div>
			<TodoList todo={todoData}></TodoList>
		</div>
	);
};

export default App;