import React,{useState}from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './fist_page.css' 
import Index from './Index'
import Create_Database from './Create_Database'
import Open_Database from './Open_Database';
import Layout from '../../components/layout/Layout';
import logout from './logout'
import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';

function Fist_Page(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route   path="/Create_Database" component={Create_Database}/>
                <Route  path="/Open_Database" component={Open_Database}/>
                <Route  path="/logout" component={logout}/>
                <Route  path="/Layout" component={Layout}/>

            </Switch>
        </Router>
    );
}
export default Fist_Page
/*<body>
            <header>
                <h1>NYMUT</h1>
            </header>
            <aside>
                <p>Start storing your passwords securely im a keePassXC database</p>
                <button onChange={'../pages/Second_Page'}>Create new database</button>
                <label for="file-upload" class="custom-file-upload1">Open existing database</label>
                <input type="file" id="file-upload"/>
            </aside>
        </body> */