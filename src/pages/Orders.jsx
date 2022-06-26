import React,{Component, useEffect}  from 'react'
import { useState } from 'react';
//import Table from '../components/table/Table'
//import {Table} from 'antd'
import { useTable, usePagination } from 'react-table'

import customerList from '../assets/JasorData/customers-list.json'


function Table({columns, data}) {
  const {
    page,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageOptions,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  return (
    <>
      <div className="card">
        <div className="card-body">
              <table className="table table-light" {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>  

          <div className="pagination">
                  <select
                    value={pageSize}
                    onChange={e => {
                      setPageSize(Number(e.target.value))
                    }}
                  >
                    {[2,4,8, 10, 14,18,20].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
              </div>
            </div>
      </div>
    </>

  )
}


function Orders () {
  const [data, setdata] = useState(customerList);
  const [order, setorder] = useState("ASC");
  const sorting =(col)=>{
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
  const columns = [
    {
      Header: 'id',
      accessor: 'name',
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Phone',
      accessor: 'phone'
    }]
  return (
    <div>
      <h2 className="page-header">
            Customers
        </h2>
        <div className="row">
            <div className="col-12">
                <div className="card card2">
                    <div className="card__body">
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
                          <Table data={data} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}
export default Orders














/********************************************* */
/*
import React from 'react';
import { useTable, usePagination } from 'react-table'

function Table({columns, data}) {
  const {
    page,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  return (
    <>
      <div className="card">
        <div className="card-body">
              <table className="table table-light" {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>  

          <div className="pagination">
                  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                  </button>{' '}
                  <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                  </button>{' '}
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                  </button>{' '}
                  <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                  </button>{' '}
                  <span>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                  </span>
                  <span>
                    | Go to page:{' '}
                    <input
                      type="number"
                      defaultValue={pageIndex + 1}
                      onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                      }}
                      style={{ width: '100px' }}
                    />
                  </span>{' '}
                  <select
                    value={pageSize}
                    onChange={e => {
                      setPageSize(Number(e.target.value))
                    }}
                  >
                    {[3, 7, 15].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
              </div>
            </div>
      </div>
    </>

  )
}

function DataTableComponent() {
  const data = [
    {
      name: 'Sara Turner',
      email: 'sara.turner@example.com',
      phone: '(603)-641-0238'
    },
    {
      name: 'Christian Kelley',
      email: 'christian.kelley@example.com',
      phone: '(153)-324-6597'
    },
    {
      name: 'Annie Dean',
      email: 'annie.dean@example.com',
      phone: '(373)-005-2708'
    },
    {
      name: 'Cameron Hunt',
      email: 'cameron.hunt@example.com',
      phone: '(912)-351-7665'
    },
    {
      name: 'Brandon Cook',
      email: 'brandon.cook@example.com',
      phone: '(554)-103-5975'
    },
    {
      name: 'Ashley Jones',
      email: 'ashley.jones@example.com',
      phone: '(604)-896-2642'
    },
    {
      name: 'Allan Fields',
      email: 'allan.fields@example.com',
      phone: '(197)-032-6069'
    },
    {
      name: 'Justin Barnes',
      email: 'justin.barnes@example.com',
      phone: '(002)-902-1774'
    },
    {
      name: 'Willie Jordan',
      email: 'willie.jordan@example.com',
      phone: '(535)-969-6902'
    },
    {
      name: 'Rhonda Cooper',
      email: 'rhonda.cooper@example.com',
      phone: '(746)-018-4462'
    },
    {
      name: 'Sara Turner',
      email: 'sara.turner@example.com',
      phone: '(603)-641-0238'
    },
    {
      name: 'Christian Kelley',
      email: 'christian.kelley@example.com',
      phone: '(153)-324-6597'
    },
    {
      name: 'Annie Dean',
      email: 'annie.dean@example.com',
      phone: '(373)-005-2708'
    },
    {
      name: 'Cameron Hunt',
      email: 'cameron.hunt@example.com',
      phone: '(912)-351-7665'
    },
    {
      name: 'Brandon Cook',
      email: 'brandon.cook@example.com',
      phone: '(554)-103-5975'
    },
    {
      name: 'Ashley Jones',
      email: 'ashley.jones@example.com',
      phone: '(604)-896-2642'
    },
    {
      name: 'Allan Fields',
      email: 'allan.fields@example.com',
      phone: '(197)-032-6069'
    },
    {
      name: 'Justin Barnes',
      email: 'justin.barnes@example.com',
      phone: '(002)-902-1774'
    },
    {
      name: 'Willie Jordan',
      email: 'willie.jordan@example.com',
      phone: '(535)-969-6902'
    },
    {
      name: 'Rhonda Cooper',
      email: 'rhonda.cooper@example.com',
      phone: '(746)-018-4462'
    }    
  ]

  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Phone',
      accessor: 'phone'
    }
  ]

  return (
      <Table data={data} columns={columns}/>
  )

}

export default DataTableComponent
*/









/* import React,{Component, useEffect}  from 'react'
import { useState } from 'react';
//import Table from '../components/table/Table'
//import {Table} from 'antd'
import {   Table } from 'react-table';

import customerList from '../assets/JasorData/customers-list.json'
function Orders () {
      const [loading, setLoading] = useState(false)
      const [dataSource, setdataSource] = useState('customerList')
     
      const columns =[
        {
            key:"1",
            title:'id',
            dataIndex:'id'
        },
        {
          key:"2",
          title:'name',
          dataIndex:'name'
        },
        {
          key:"3",
          title:'email',
          dataIndex:'email'
        },
        {
          key:"4",
          title:'Location',
          dataIndex:'Location'
        },
        {
          key:"5",
          title:'phone',
          dataIndex:'phone'
        },
        {
          key:"6",
          title:'total_spend',
          dataIndex:'total_spend'
        },
        {
          key:"7",
          title:'total_orders',
          dataIndex:'total_orders'
        },
    ]
      const [data, setdata] = useState('customerList');
      const [order, setorder] = useState("ASC");
  
      return (
        <div>
          <div>
            <Table
            data={data}
            columns ={columns }
            dataSource={dataSource}
            >

            </Table>
          </div>
        </div>
      );
    
  }
export default Orders
*/









































/*
function Orders () {


      const [data, setdata] = useState(customerList);
      const [order, setorder] = useState("ASC");
      const sorting =(col)=>{
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
      return (
        <div>
          <h2 className="page-header">
                Customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card card2">
                        <div className="card__body">
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
      );
    
  }
export default Orders

*/
