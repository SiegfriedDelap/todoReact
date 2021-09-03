import React, {useState, useContext, useEffect, useCallback, useMemo, Component} from 'react';
import ReactDOM from 'react-dom';


const MyContext = React.createContext();

const App = () => {
	return (
		<div>
			<MyContext.Provider value="New day today!">
				<HookSwitcher />
				<Child />
				<Clicker />
				{/* <Notification /> */}
			</MyContext.Provider>
		</div>
	);
};

const HookSwitcher = () => {

	const [color, setColor] = useState('wheat');
	const [fontSize, setFontSize] = useState(14);

	return (
		<div style={{
			padding: '10px',
			backgroundColor: color,
			fontSize: `${fontSize}px`
		}}>
			Hello world!
			<button onClick={()=>setColor('grey')}>Grey</button>
			<button onClick={()=>setColor('wheat')}>Wheat</button>
			<button onClick={()=>setFontSize((s)=>s+2)}> Font size +</button>
			<button onClick={()=>setFontSize((s)=> s-2)}> Font size -</button>
		</div>
	);
};

const Child = ()=>{
	const value = useContext(MyContext);
	return <p>{value}</p>;
};

const Clicker = () => {
	const [value, setValue] = useState(1);
	const [visible, setVisible] = useState(true);

	if(visible) {
		return(
			<div>

				<button onClick={()=>setValue((v)=>v+1)}>+</button>
				<button onClick={()=>setValue((v)=>v-1)}>-</button>
				
				<button onClick={()=>setVisible(false)}> Hide </button>

				{/* <ClassCounter value={value}/>
				<HookCounter value={value}/> */}

				<PlanetInfo id={value}/>

			</div>
		);
	} else {
		return <button onClick={()=>setVisible(true)}> Show </button>
	}

}

const HookCounter = ({value}) =>{
	useEffect(()=>{
		console.log('useEffect');
		return()=>console.log('clear');
	}, [value]);

	return <p>{value}</p>
}

class ClassCounter extends Component {
	componentDidMount(){
		console.log('mounted');
	}
	componentDidUpdate(props){
		console.log('updated');
	}
	componentWillUnmount(){
		console.log('unmounted');
	}

	render(){
		return <p>{this.props.value}</p>
	}

}

const Notification = () => {

	const [visible, setVisible] = useState(true);

	useEffect(()=>{
		const timer = setTimeout(()=>{
			setVisible(false)
		}, 1500)
		return()=>{
			clearTimeout(timer);
		}
	}, [])

	return (
	<div>
		{ visible && <p>Hello msg!</p>}
	</div>)
}

const getPlanet = (id) => {
	return fetch(`https://swapi.dev/api/planets/${id}/`)
	.then(res => res.json())
	.then(data=> data);
};

const useRequest = (request) =>{

	const initialState = useMemo(()=>({
		data: null,
		loading: true,
		error: null
	}), []);

	const [dataState, setDataState] = useState(initialState);

	useEffect(()=>{

		setDataState(initialState)

		let cancelled = false;

		request()
		.then(data => !cancelled && setDataState({
			data,
			loading: false,
			error: null
		}))
		.catch(error=> !cancelled && setDataState({
			data:null,
			loading:false,
			error
		}));
		return ()=> cancelled = true;

	}, [request]);

	return dataState;

}

const usePlanetInfo = (id) =>{
	const request = useCallback(()=>getPlanet(id), [id]);
	
	return useRequest(request);
}

const PlanetInfo = ({id})=> {

	const {data, loading, error} = usePlanetInfo(id);

	if (error) {
		return <div> Something goes wrong </div>; 
	}

	if(loading){
		return <div>loading...</div>;
	}




	return (
		<div>{id} - {data.name} </div>
		
	);
};

ReactDOM.render(<App />, document.getElementById('root'));



