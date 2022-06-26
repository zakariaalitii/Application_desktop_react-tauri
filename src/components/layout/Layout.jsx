import React,{useEffect} from 'react'

import './layout.css' 

import Sidebar from '../sidebar/sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../../main/index/Routes'
import Dashboard from '../../pages/Dashboard'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector} from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import { useDispatch } from 'react-redux'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode','theme-mode-light')

        const colorClass = localStorage.getItem('colorMode','theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
        <Route render={(props) => (
            <div className={`layout  ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar {...props}/>
                <div className="layout_coutent">
                    <TopNav/>
           
                    <div className="layout_content-main">
                        <Routes/>
                    </div>
                </div>
            </div>
        )}/>
        </BrowserRouter>
    )
}
export default Layout
