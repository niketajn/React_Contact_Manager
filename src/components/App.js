import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import React, { useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactDetail from './ContactDetail';
import api from '../api/contacts';
import EditContact from './EditContact';

function App() {
  const LOCAL_STOARGE_KEY = "contacts";
  //const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STOARGE_KEY)) ?? []);
  const [contacts,setContacts] = useState([]);
  const [searchItem,setSearchItem] = useState("");
  const [searchResults,setSearchResults] = useState([]);
  //retrive contacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  const addContactHandler = async(contact) => {    
    const request = {
      ...contact,
      id: uuid().slice(0,8)
    }
    const response = await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async(contact) => {    
    const response = await api.put(`/contacts/${contact.id}`,contact);
    const {id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data } : contact;
      })
    );
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
   // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STOARGE_KEY));
   // if(retriveContacts) setContacts(retriveContacts);
   const getAllContacts = async() => {
    const allContacts = await retriveContacts();
    if(allContacts) setContacts(allContacts);
   }
   getAllContacts();
  },[]);//dependency

  useEffect(()=>{
    //localStorage.setItem(LOCAL_STOARGE_KEY,JSON.stringify(contacts));
  },[contacts]);//dependency

  const searchHandler = (value) =>{
    setSearchItem(value);
    if(value !== "" ){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchItem.toLowerCase());
      })
      setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
    }
  };

  return (
    <div className="ui container">
        {/*<AddContact addContactHandler={ addContactHandler }/>*/}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route 
          path="/"
          element={
             <ContactList 
              contacts={searchItem.length <1 ? contacts : searchResults} 
              getContactID={removeContactHandler}
              item={searchItem}
              searchKeyword = {searchHandler}
              />
            }
          />
        
        <Route 
          path="/add"
          element={
            <AddContact addContactHandler={ addContactHandler}/>
          }
          />

          <Route 
            path="/contact/:id" 
            element={<ContactDetail/>
          }
          />

          <Route
            path="/edit/:id"
            element={<EditContact updateContactHandler={ updateContactHandler}/>}
          />

      </Routes>
      </BrowserRouter>
      
        {/*<ContactList contacts={contacts} getContactID={removeContactHandler}/>*/}
      
      </div>
  );
}

export default App;
