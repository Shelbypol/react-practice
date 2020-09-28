import React from 'react';
import './App.css';
import Talker from './Talker.js';
import Random from './RandomColorPicker/Random';
import {JumbotronStrap} from "./JumbotronStrap";
import {Carousel} from "./Carousel";


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Talker/>
      <Random/>
      <JumbotronStrap />
      <JumbotronStrap />
      <Carousel />

    </div>
  );
}

export default App;
