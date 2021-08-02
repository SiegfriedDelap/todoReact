/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import ReactDom from 'react-dom';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';


const App = () => {
	return(
		<div>
			<TodoList></TodoList>
			<AppHeader></AppHeader>
			<SearchPanel></SearchPanel>
		</div>
	);
};

ReactDom.render(<App/>, document.getElementById('root'));
