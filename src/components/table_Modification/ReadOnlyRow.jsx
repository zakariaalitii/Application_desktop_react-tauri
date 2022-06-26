import { nanoid } from 'nanoid';
import React,{Component, useState}  from 'react'
import './main.css'

const ReadOnlyRow = ({contact,handleEditClick, handleDlelteClick}) => {
   
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button className='buttontable Edit_Save' type='button'
                 onClick={(event)=> handleEditClick(event, contact)}>
                    Edit
                </button>
                <button className='buttontable Dlelte ' type='button' onClick={()=> handleDlelteClick(contact.id)}>
                    Dlelte
                </button>
            </td>
        </tr>
    )
}
export default ReadOnlyRow;