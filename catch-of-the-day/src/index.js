import React from "react";
import { render } from "react-dom"; // only importing the render method here
// Components
// import StorePicker from './components/StorePicker';
// import App from './components/App';
import Router from './components/Router';
// Style
import "./css/style.css";


render(<Router />, document.querySelector('#main'));