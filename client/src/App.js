import React from 'react';
import './App.css';
import Talker from './Talker.js';
import Random from './RandomColorPicker/Random';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Talker/>
      <Random/>
    </div>
  );
}

export default App;
