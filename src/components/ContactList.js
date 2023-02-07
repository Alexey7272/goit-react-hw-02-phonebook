// import React, {Component} from "react";
import styles from "./PhoneBook.module.css";

const ContactList = ({ contacts }) => (
    <ul className={styles.Contacts__list}>
        {contacts.map(( contact ) => ( 
            <li
            key={contact.id}
            >
            {contact.text} 
            </li>
        ))}
    </ul>
);

export default ContactList;