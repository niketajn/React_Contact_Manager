import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import React, { useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const LOCAL_STOARGE_KEY = "contacts";
  const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STOARGE_KEY)) ?? []);

  const addContactHandler = (contact) => {    
    const uniqueID = uuid().slice(0,8);
    setContacts([...contacts, {...contact,id:uniqueID}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    console.log(newContactList);
  }

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STOARGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);//dependency

  useEffect(()=>{
    localStorage.setItem(LOCAL_STOARGE_KEY,JSON.stringify(contacts));
  },[contacts]);//dependency

  return (
    <div className="ui container">
      
      <Header/>
      
        {/*<AddContact addContactHandler={ addContactHandler }/>*/}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ContactList/>}></Route>
        <Route exact path="/add" element={<AddContact/>}></Route>
      </Routes>
      </BrowserRouter>
      
        {/*<ContactList contacts={contacts} getContactID={removeContactHandler}/>*/}
      
      </div>
  );
}

export default App;
