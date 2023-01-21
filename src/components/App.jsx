import React, {Component} from "react";
import ContactEditor from './ContactEditor';
import ContactList from "./ContactList";
import styles from "./PhoneBook.module.css";
import shortid from "shortid";

export default class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  addContact = text => {
    // console.log(text)
    
    const contact = {
      id: shortid.generate(),
      text,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render () {
    return (
      <div>
        <ContactEditor onSubmit={this.addContact}/>
        <h2 className={styles.Contacts__title}>Contacts</h2>
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
};