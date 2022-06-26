import React from 'react'

import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'
import Products from '../../pages/Products'
import Orders from '../../pages/Orders'
import Categories from '../../pages/Categories'
import Analytics from '../../pages/Analytics'
import Sidebar from '../../components/sidebar/sidebar'
import Countries from '../../pages/Countries'


const Routes = () => { 
    return (
       
        <Switch >
             <Route path='/'  exact  component={Dashboard}/>
            <Route path='/Layout'  exact  component={Dashboard}/>
            <Route path='/customers'   component={Customers}/>
            <Route path='/Products'   component={Products}/>
            <Route path='/Orders'   component={Orders}/>
            <Route path='/Analytics'   component={Analytics}/>
            <Route path='/Categories'   component={Categories}/>
            <Route path='/Countries'   component={Countries}/>
        </Switch>
       
    )
}

export default Routes
