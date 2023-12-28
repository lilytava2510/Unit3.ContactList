import { useState,useEffect } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);


   const selectedContact = contacts.find((contact) => contact.id === selectedContactId)

  console.log(selectedContactId)
  
  useEffect(()=> {
    async function fetchContacts(){
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/');
        const data = await response.json();
        setContacts(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchContacts()
  },[])
  



  return (
    <>
     <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId}/> 
    <SelectedContact selectedContact={selectedContact }/> 
    </>
  );
}

export default App
