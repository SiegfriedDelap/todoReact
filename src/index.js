/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import ReactDom from 'react-dom';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';


const App = () => {
	const todoData=[
		{label:'Deily hard work', important:false, id:1},
		{label:'Everyday hard work', important:true, id:2},
		{label:'eat something', important:false, id:3}
	];

	return(
		<div>
			<TodoList todo={todoData}></TodoList>
			<AppHeader></AppHeader>
			<SearchPanel></SearchPanel>
		</div>
	);
};

ReactDom.render(<App/>, document.getElementById('root'));
