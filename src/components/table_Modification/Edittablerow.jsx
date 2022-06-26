import React from 'react'

const Edittablerow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
   
    return (
        <tr>
            <td>
                <input 
                    className='inputEdiit'
                    type="text"
                    required="required"
                    placeholder='Enter a name...' 
                    name='name'
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                >  
                </input>
            </td>
            <td>
                <input 
                    className='inputEdiit'
                    type="text"
                    name='address'
                    required="required"
                    placeholder='Enter a address...'
                    value={editFormData.address}
                    onChange={handleEditFormChange} 
                >  
                </input>
            </td>
            <td>
                <input
                    className='inputEdiit' 
                    type="text"
                    name='phoneNumber'
                    required="required"
                    placeholder='Enter a phoneNumber...'
                    value={editFormData.phoneNumber} 
                    onChange={handleEditFormChange}
                >  
                </input>
            </td>
            <td>
                <input 
                    className='inputEdiit'
                    type="text"
                    name='email'
                    required="required"
                    placeholder='Enter a email...' 
                    value={editFormData.email} 
                    onChange={handleEditFormChange}
                >  
                </input>
            </td>
            <td>
                <button className='buttontable Edit_Save' type='submit'>Save</button>
                <button className='buttontable Cancel' type='submit' onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
        
    )
}
export default Edittablerow;

