import React from 'react'

import { BrowserRouter,Switch,Route } from 'react-router-dom'

import logout from '../main/index/logout';
import Layout from './layout/Layout';



const Routes = () => { 
    return (
        <Switch >
             <Route path='/'  exact  component={Layout}/>
             <Route path='/logout'  exact  component={logout}/>
        </Switch>
       
    )
}

export default Routes
