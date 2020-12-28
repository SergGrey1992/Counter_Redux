import React, {useEffect} from 'react';
import './App.css';
import {InputsContainer} from './Components/InputsContainer';
import {DisplayContainer} from "./Components/DisplayContainer";
import {useDispatch} from "react-redux";
import {ChangeMaxValue, ChangeStartValue, SetValue} from "./Redux/actions";

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(ChangeStartValue(Number(localStorage.getItem("startValue"))))
		dispatch(ChangeMaxValue(Number(localStorage.getItem("maxValue"))))
		dispatch(SetValue(Number(localStorage.getItem("startValue"))))
	}, [dispatch])
	return (
		<div className="App">
			<InputsContainer/>
			<DisplayContainer/>
		</div>
	);
}

export default App;
