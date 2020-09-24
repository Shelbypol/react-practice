// port React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';
// import 'bootstrap/dist/css/bootstrap.min.css';




//STORE -> GLOBALIZED STATE

//ACTION INCREMENT
// https://www.youtube.com/watch?v=CVpUuw9XSjY 29:00 to see how to do REDUX STORE

//REDUCER
const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
    }const increment = () => {
        return {
            type : 'INCREMENT'
        }
    };
};

let store = createStore(counter);

//DISPLAY
store.subscribe(() => console.log(store.getState()));


//DISPATCH
// store.dispatch(increment());

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();