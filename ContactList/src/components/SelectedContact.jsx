import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContact }){



    return (
         
  
        <div>{selectedContact && selectedContact.name}</div> 
     
     
    )
}