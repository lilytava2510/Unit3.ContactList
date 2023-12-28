import React from "react";
import SelectedContact from "./SelectedContact";


export default function ContactRow({contact, setSelectedContactId}){
    return (
      
        
        <tr onClick={() => {
            setSelectedContactId(contact.id)
        }} >
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
        </tr>
    )
}

