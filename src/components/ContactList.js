import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactID(id);
    }
    const renderContactList = props.contacts.map((contact,i)=>{
        return(
            <ContactCard key={i} contact={contact} clickHandler={deleteContactHandler}/>
        )
    });

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
        <div className="ui celled list">
            {renderContactList}
        </div>
        
        </div>
    )
}

export default ContactList;