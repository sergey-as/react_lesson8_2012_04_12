import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// https://www.youtube.com/watch?v=naIWIC9L3W0
// Redux-1
// 22:00
import {createStore} from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case value:

            break;

        default:
            break;
    }
}
const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
