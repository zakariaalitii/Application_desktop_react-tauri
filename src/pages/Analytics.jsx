import { nanoid } from 'nanoid';
import React,{Component, useState,Fragment}  from 'react'

import mock_data from '../assets/JasorData/mock-data.json'
import Edittablerow from '../components/table_Modification/Edittablerow';
import ReadOnlyRow from '../components/table_Modification/ReadOnlyRow';

const Analytics = () => {
    const [selects,setSelects] = useState();
    const [contacts,setContacts] = useState(mock_data);
    const [addFormData,setaddFormData] = useState({
        name:'',
        address:'',
        phoneNumber:'',
        email:'',
    });

    const [editFormData, setEditFormData] = useState({
        name:'',
        address:'',
        phoneNumber:'',
        email:'' ,
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = event => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue =event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setaddFormData(newFormData);
    };

    const handleEditFormChange =  (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue =event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData)
    }

    const handleAddFormSubmit = (event) =>{
        event.preventDefault();
        const newContact = {
            id:nanoid(),
            name:addFormData.name,
            address:addFormData.address,
            phoneNumber:addFormData.phoneNumber,
            email:addFormData.email
        };
        const newContacts = [...contacts,newContact];
        setContacts(newContacts);
    }
    const handleEditFormSubmit = (event) =>{
        event.preventDefault();

        const editeContact = {
            id: editContactId,
            name: editFormData.name,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id=== editContactId);
        newContacts[index] = editeContact;
        setContacts(newContacts);
        setEditContactId(null);
    }
    const handleEditClick = (event, contact)=>{
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            name: contact.name,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email
        }
        setEditFormData(formValues);
    };
    const handleCancelClick = ()=>{
        setEditContactId(null);
    };
    const handleDlelteClick = (contactId)=>{
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id=== contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts)
    }
    return (
        <div>
            <h2 className="page-header">
                Analytics
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card card2">
                        <div className="card__body">
                        <form onSubmit={handleEditFormSubmit}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact)=>(
                                    <Fragment>
                                        {
                                        editContactId===contact.id ?(
                                            <Edittablerow 
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                            />
                                        ) :  (
                                            <ReadOnlyRow 
                                            contact={contact}
                                            handleEditClick={handleEditClick}
                                            handleDlelteClick={handleDlelteClick}
                                            />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="page-header">
                Add a Contact
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card card2">
                        <div >
                            <form onSubmit={handleAddFormSubmit}>
                                <input 
                                    className='inputAdd'
                                    type="text"
                                    name='name'
                                    required="required"
                                    placeholder='Enter a name...' 
                                    onChange={handleAddFormChange}
                                />
                                <input 
                                    className='inputAdd'
                                    type="text"
                                    name='address'
                                    required="required"
                                    placeholder='Enter a address...' 
                                    onChange={handleAddFormChange}
                                />
                                <input 
                                    className='inputAdd'
                                    type="text"
                                    name='phoneNumber'
                                    required="required"
                                    placeholder='Enter a phoneNumber...' 
                                    onChange={handleAddFormChange}
                                />
                                 <input
                                    className='inputAdd' 
                                    type="text"
                                    name='email'
                                    required="required"
                                    placeholder='Enter a email...' 
                                    onChange={handleAddFormChange}
                                />
                               
                                <h1>{selects} </h1>
                                <div className='add'>
                                <button className='buttontable Edit_Save' type='submit'>add</button>
                                </div>
                            </form>
                           
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Analytics;
