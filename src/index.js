import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Sass/App.scss';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Provider} from "react-redux";
import {startSetExpenses} from './actions/expenses'
import configureStore from "./store/configureStore";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
const store = configureStore();
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
ReactDOM.render(
    <div className="sweet-loading">
        <ClipLoader
            size={50}
            css={override}
            color={"#123abc"}
            loading={true}
        />
    </div>,
    document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(<React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
