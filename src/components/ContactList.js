import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
const contacts=[{
    "id":1,
    "name":"Anish",
    "email":"anish@gmail.com"
}]
    const deleteContactHandler = (id) => {
        props.getContactID(id);
    }
    const renderContactList = contacts.map((contact,i)=>{
        return(
            <ContactCard key={i} contact={contact} clickHandler={deleteContactHandler}/>
        )
    });

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;