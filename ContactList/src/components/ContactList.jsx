import React from "react";
import { useState,useEffect } from "react";
import ContactRow from "./ContactRow";
import SelectedContact from "./SelectedContact";


export default function ContactList({contacts, setSelectedContactId}){
    
  


    console.log("Contacts:", contacts)
return (
    <>
    <div>
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
           {contacts.map((contact) => {
            return <ContactRow
             key={contact.id}
             contact={contact}
             setSelectedContactId={setSelectedContactId}
              />
           })} 
            </tbody>
        </table>
    </div>
    </>
)
};