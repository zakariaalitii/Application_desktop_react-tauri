import React from 'react'

import { Link } from 'react-router-dom'
import './sidebar.css'

import logo from '../../assets/images/OIP.jpg'

import sidebar_items from '../../assets/JasorData/sidebar_routes.json'

const SidebarItem = props =>  {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
               
            </div>
        </div>
    )
}

const Logoutitem = props =>  {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <a href="/Open_Database">
                    {props.title}
                </a>
            </div>
        </div>
    )
}

const Sidebar = props => { 

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item,index) => (
                     <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                     </Link>
                ))
            }
            <div className='Logout__item'>
            <a href='/Open_Database'><i className='bx bx-log-out-circle bx-rotate-180'></i> Logout</a>
            </div>
        </div>
       
    )
}
export default Sidebar
