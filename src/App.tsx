import React from 'react';
import './App.css';

import {InputsContainer} from './Components/InputsContainer';
import {DisplayContainer} from "./Components/DisplayContainer";

function App() {
  return (
    <div className="App">
      <InputsContainer/>
      <DisplayContainer />
    </div>
  );
}

export default App;
