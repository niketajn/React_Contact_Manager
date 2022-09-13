import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import React,{useState} from 'react';

function App() {
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={ addContactHandler }/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
