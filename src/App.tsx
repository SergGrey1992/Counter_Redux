import React from 'react';
import './App.css';

import {InputsContainer} from './Components/InputsContainer';
import {DisplayContainer} from "./Components/DisplayContainer";
import {useDispatch} from "react-redux";
import {ChangeMaxValue, ChangeStartValue} from "./Redux/actions";

function App() {
  const dispatch = useDispatch()
  const setLocal = () => {
    dispatch(ChangeStartValue( Number(localStorage.getItem("startValue"))) )
    dispatch(ChangeMaxValue( Number(localStorage.getItem("maxValue"))) )
  }
  setLocal()
  return (
    <div className="App">
      <InputsContainer/>
      <DisplayContainer />
    </div>
  );
}

export default App;
