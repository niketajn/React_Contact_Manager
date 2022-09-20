import React, { useState } from "react";

const AddContact = (props) => {

    const [userInfo,setUserInfo] = useState({
        name:"",
        email:""
    });
    

    const add = (e) => {
        e.preventDefault();
        if(userInfo.name==='' || userInfo.email===''){
            console.log("hi")
            alert("All the fields are mandatory");
            return
        }
        props.addContactHandler(userInfo);
        setUserInfo({name:"",email:""});
        console.log(props)
        window.location.replace("/");
    }

        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" 
                        value={userInfo.name} onChange={ (e)=> setUserInfo({...userInfo,name:e.target.value}) }/>
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={userInfo.email} onChange={ (e)=>setUserInfo({...userInfo,email:e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }

export default AddContact;