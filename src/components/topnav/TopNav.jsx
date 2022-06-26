import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../themeMenu/ThemeMenu'

import notification from '../../assets/JasorData/notification.json'

import user_image from '../../assets/images/ZakariaAliti.jpg'



const curr_user = {
    display_name: 'Tuat Tran',
    Image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)



const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)
const Topnav = () => { 
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
               
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notification}
                        renderItems={(item,index) => renderNotificationItem(item,index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}
export default Topnav
