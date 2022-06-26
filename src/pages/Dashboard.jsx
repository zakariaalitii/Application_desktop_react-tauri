import React, {useEffect}  from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'

import Table from '../components/table/Table'
import StatusCard from '../components/status-card/StatusCard'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JasorData/status-card-data.json'

import ThemeAction from '../redux/actions/ThemeAction'

import date from 'lodash-es/date'


const chartOptions = {
    series: [{
            name:'Online Customers',
            data: [40,30,70,80,40,16,40,20,51]  
           
        },{
            name:'Store Customers',
            data: [40,70,20,90,36,80,30,91,60]
    }],
    options: {
        color: ['#2980b9', '#2980b9'],
        Chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories:   ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }

    }
}


const topCustomers = {
    head:[
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15.870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$15.870"
        },
        {
            "username": "john doe",
            "order": "490",
            "price": "$15.870"
        },
        {
            "username": "john doe",
            "order": "110",
            "price": "$15.870"
        },
        {
            "username": "john doe",
            "order": "80",
            "price": "$15.870"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderCusomerBody= (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)
const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD144",
            user: "john doe",
            date: "21 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD144",
            user: "john via",
            date: "27 Jun 2021",
            price: "$900",
            status: "paid"
        },
        {
            id: "#OD144",
            user: "john doe",
            date: "10 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD144",
            user: "john doe",
            date: "15 Jun 2021",
            price: "$900",
            status: "paid"
        },
        {
            id: "#OD144",
            user: "john doe",
            date: "12 Jun 2021",
            price: "$900",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping":"primary",
    "pending":"warning",
    "paid":"success",
    "refund":"danger",
}

const renderOrderHead = (item, index) => (
   <th key={index}>{item}</th>
)

const renderOrderHBody= (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

   
    return (
        <div>
           <h2 className="page-header">Dashboard</h2>
               <div className="row">
                   <div className="col-6">
                       <div className="row">
                            {
                               statusCards.map((item, index) => (
                                   <div className="col-6" key={index}>
                                       <StatusCard
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}
                                       />
                                   </div>
                               ))
                            }
                       </div>
                   </div>
                   <div className="col-6">
                           <div className='card full-height'>
                                {/*chart */}
                                <Chart
                                 options={themeReducer === 'theme-mode-dark' ? 
                                    {
                                        ...chartOptions.options,
                                        theme : {mode: 'dark'}
                                    }: {
                                        ...chartOptions.options,
                                        theme : {mode: 'light'}
                                    }
                                }
                                 series={chartOptions.series}
                                 type='line'
                                 height='100%'
                                />
                           </div>
                    </div>
                    <div className="col-4">
                        <div className="card card2">
                            <div className="card__header">
                                <h3>top customers</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    headData={topCustomers.head}
                                    renderHead={(item, index) => renderCusomerHead(item, index)}
                                    bodyData={topCustomers.body}
                                    renderbody={(item, index) => renderCusomerBody(item, index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/'>view all</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                       <div className="card">
                           <div className="card__header">
                               <h3>latest orders</h3>
                           </div>
                            <div className="card__body">
                            <Table
                                    headData={latestOrders.header}
                                    renderHead={(item, index) => renderOrderHead(item, index)}
                                    bodyData={latestOrders.body}
                                    renderbody={(item, index) => renderOrderHBody(item, index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/'>view all</Link>
                            </div>
                        </div> 
                    </div>
               </div>
        </div>
    )
}
export default Dashboard
