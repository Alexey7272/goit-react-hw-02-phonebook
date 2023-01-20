// import React, {Component} from "react";

const ContactList = ({ contacts }) => (
   <ul>
        {contacts.map(( contact ) => ( 
            <li
            key={contact.name}
            >
            {contact.name} 
            </li>
        ))}
    </ul>
);

export default ContactList;