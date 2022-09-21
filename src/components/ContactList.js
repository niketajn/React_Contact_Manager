import React,{useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {
const inputElt = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactID(id);
    }
    const renderContactList = props.contacts.map((contact,i)=>{
        return(
            <ContactCard key={i} contact={contact} clickHandler={deleteContactHandler}/>
        )
    });

    const getSearchItem = () => {
        props.searchKeyword(inputElt.current.value)
    }

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className="ui search" style={{marginTop:"1em"}}>
                <div className="ui icon input">
                    <input type="text" 
                    placeholder="search contact" 
                    className="prompt"
                    value={props.item}
                    onChange={getSearchItem}
                    ref={inputElt}></input>
                    <i className="search icon"></i>
                </div>
            </div>
        <div className="ui celled list">
            {renderContactList.length ? renderContactList : "No contacts available"}
        </div>
        
        </div>
    )
}

export default ContactList;