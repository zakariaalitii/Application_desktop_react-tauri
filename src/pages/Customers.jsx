import React from 'react'

import {useSortBy} from 'react-table'
import { useState } from 'react';
import Table from '../components/table/Table'

import customerList from '../assets/JasorData/customers-list.json'



const Customers = () => {
    const [data, setdata] = useState(customerList);
    const [order, setorder] = useState("ASC");
      const sorting =()=>{
          let col;
        if(order==="ASC"){
          const sorted = [...data].sort((a,b)=>
          a[col] > b[col] ? 1: -1
          );
          setdata(sorted);
          setorder("DSC");
        }
        if(order==="DSC"){
          const sorted = [...data].sort((a,b)=>
          a[col] < b[col] ? 1: -1
          );
          setdata(sorted);
          setorder("ASC");
        }
      }

      const customersTableHead = [
        <div>
            <i onClick={()=> sorting() } className="bx bx-sort"></i>
        </div>,
        'name',
        'email',
        'Location',
        'phone',
        'total_spend',
        'total_orders'
    ]
    
    const renderHead = (item, index) => <th  >{item}</th>
    
    const renderBody = (item, index) => (
        <tr >
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.Location}</td>
            <td>{item.phone}</td>
            <td>{item.total_spend}</td>
            <td>{item.total_orders}</td>
        </tr>
    )
    
    
    return (
        <div>
            <h2 className="page-header">
                USERS
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card card2">
                        <div className="card__body">
                        <Table
                            limit='10'
                            headData={customersTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={data}
                            renderbody={(item, index) => renderBody(item, index)}
                        />
                        <table>
                            <thead>
                            <th onClick={()=> sorting("id")}><i className="bx bx-error"></i></th>
                            <th onClick={()=> sorting("name")}>name</th>
                            <th onClick={()=> sorting("email")}>email</th>
                            <th onClick={()=> sorting("Location")}>Location</th>
                            <th onClick={()=> sorting("phone")}>phone</th>
                            <th onClick={()=> sorting("total_spend")}>total_spend</th>
                            <th onClick={()=> sorting("total_orders")}>total_orders</th>
                            </thead>
                            <tbody>
                            {data.map((d)=>(
                                <tr>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td> 
                                <td>{d.Location}</td>
                                <td>{d.phone}</td>
                                <td>{d.total_spend}</td>
                                <td>{d.total_orders}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Customers

