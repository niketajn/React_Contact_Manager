import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const EditContact = (props) => {

    const location = useLocation();
    const {id,name,email} = location.state.contact;

    const [userData,setUserData] = useState({
        id,
        name,
        email
    });
    

    const Update = (e) => {
        e.preventDefault();
        if(userData.name==='' || userData.email===''){
            alert("All the fields are mandatory");
            return
        }
        props.updateContactHandler(userData);
        setUserData({name:"",email:""});
        window.location.replace("/");
    }

        return (
            <div className="ui main">
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={Update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" 
                        value={userData.name} onChange={ (e)=> setUserData({...userData,name:e.target.value}) }/>
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={userData.email} onChange={ (e)=>setUserData({...userData,email:e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        )
    }

export default EditContact;