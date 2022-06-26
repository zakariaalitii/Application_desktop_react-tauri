import React,{useEffect, useState} from "react";
import customerList from '../assets/JasorData/Countries.-data.json'

import { useRef} from 'react'
function Countries() {

    const [userData, setUserData] = useState(customerList);
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(userData)
    }, [])

    const handleChange = (e) => {
        const {name,  checked} = e.target;
        if(name=== "allSelect"){
            let tempUser = users.map(user => {
                return {...user, ischecked: checked};
            });
            setUsers(tempUser)
        }else{
            let tempuser = users.map((user) => 
            user.name === name ? {...user, ischecked: checked} : user
            );
            setUsers(tempuser)
        }
      
    };
    return(
        <div className="col-12">
        <div className="card card2">
            <div className="card__body">
                <form>
                    <h3>select Users</h3>
                    <div>
                        <input 
                            type="checkbox" 
                            name="allSelect"  
                            checked={users.filter(users => users?.ischecked !== true).length < 1}
                            onChange={handleChange}/>
                        <label htmlFor="">Greater London</label>
                    </div>
                    <div className="select-All">
                        {
                            users.map((user)=>(
                            <div>
                                <input
                                    type="checkbox" 
                                    name={user.name} 
                                    checked={user?.ischecked || false}
                                    onChange={handleChange}
                                />
                                <label htmlFor="">{user.name}</label>
                            </div>
                            )) 
                        }
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
export default Countries;