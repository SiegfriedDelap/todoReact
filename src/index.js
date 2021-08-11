/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import ReactDom from 'react-dom';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import ItemStatusFilter from './components/item-status-filter';


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

ReactDom.render(<App/>, document.getElementById('root'));
