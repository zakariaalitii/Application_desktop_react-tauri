import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'

import { Provider } from 'react-redux';

import rootReducer from './redux/reducers'

import './assets/boxicons-2.1.1/css/boxicons.min.css'
import './assets/css/index.css';
import './assets/css/grid.css';
import './assets/css/theme.css';

import Layout from './components/layout/Layout';

import Fist_Page from './main/index/First_Page';
import RoutesNav from './navbar/RoutesNav';

const store = createStore(
    rootReducer
)

document.title = 'NYMUT'
ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
        {/* <Layout /> */ } 
        <Fist_Page/>
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker();
