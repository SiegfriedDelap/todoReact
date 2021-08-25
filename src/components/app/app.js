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
			this.createTodoItem('Deily hard work'),
			this.createTodoItem('Everyday hard work'),
			this.createTodoItem('eat something')
		]
	};


	createTodoItem(label){
		return {
			label:label,
			important: false,
			done:false,
			id:this.maxId++
		};
	}

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
		const newItem = this.createTodoItem(text);

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


	onToggleDone=(id)=>{

		this.setState(({todoData})=>{
			//update object
			const idx = todoData.findIndex((el)=> el.id===id);

			const oldItem = todoData[idx];

			const newItem = {...oldItem, done:!oldItem.done};
			//construct new array

			//берем все элементы старого массива до точки удаления
			const before = todoData.slice(0, idx);

			//берем все элементы старого массива после точки удаления 
			const after = todoData.slice(idx+1);

			//собираем новый массив
			const newArray = [...before, newItem, ...after];

			return {
				todoData: newArray
			};
		});
	};

	onToggleImportant=(id)=>{
		
		this.setState(({todoData})=>{
			//update object
			const idx = todoData.findIndex((el)=> el.id===id);

			const oldItem = todoData[idx];

			const newItem = {...oldItem, important:!oldItem.important};
			//construct new array

			//берем все элементы старого массива до точки удаления
			const before = todoData.slice(0, idx);

			//берем все элементы старого массива после точки удаления 
			const after = todoData.slice(idx+1);

			//собираем новый массив
			const newArray = [...before, newItem, ...after];

			return {
				todoData: newArray
			};
		});
	};


	render(){
		const doneCount = this.state.todoData.filter((el)=> el.done).length;

		const todoCount = this.state.todoData.length - doneCount;


		return(
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount}></AppHeader>
				<div className="top-panel d-flex">
					<ItemStatusFilter></ItemStatusFilter>
					<SearchPanel></SearchPanel>
				</div>
				<TodoList 
					todo={this.state.todoData}
					onDeleted = {this.deleteItem}
					onToggleImportant={this.onToggleImportant} 
					onToggleDone={this.onToggleDone} 
				></TodoList>
				<AddItem onAddItem={this.addItem}/>
			</div>
		);
	}
}

