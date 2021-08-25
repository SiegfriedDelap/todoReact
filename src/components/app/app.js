/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React, {Component} from 'react';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css';


export default class App extends Component  {

	maxId = 100;

	state={
		todoData:[
			{label:'Deily hard work', important:false, id:1},
			{label:'Everyday hard work', important:true, id:2},
			{label:'eat something', important:false, id:3}
		]
	};

	deleteItem=(id)=>{
		this.setState(({todoData})=>{
			//сохраняем имутабельность стейта

			//достаем индекс для удаления
			const idx = todoData.findIndex((el)=> el.id===id);

			//берем все элементы старого массива до точки удаления
			const before = todoData.slice(0, idx);

			//берем все элементы старого массива после точки удаления 
			const after = todoData.slice(idx+1);

			//собираем новый массив
			const newArray = [...before, ...after];

			return {
				todoData: newArray
			};
		});
	};

	addItem=(text)=>{
		//generate id
		const newItem ={
			label:text,
			important: false,
			id:this.maxId++
		};

		//add element in array
		this.setState(({todoData}) =>{
			const newArray = [
				...todoData,
				newItem
			];
			return{
				todoData:newArray
			};
		});
	};


	render(){
		return(
			<div className="todo-app">
				<AppHeader toDo={1} done={3}></AppHeader>
				<div className="top-panel d-flex">
					<ItemStatusFilter></ItemStatusFilter>
					<SearchPanel></SearchPanel>
				</div>
				<TodoList 
					todo={this.state.todoData}
					onDeleted = {this.deleteItem} 
				></TodoList>
				<AddItem onAddItem={this.addItem}/>
			</div>
		);
	}
}

