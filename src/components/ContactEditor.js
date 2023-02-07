import React, { Component } from "react";
import styles from "./PhoneBook.module.css";

class ContactEditor extends Component {
    state = {
       nameText: '',
       telNumber: '',
    };

    contactChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    
    // nameChange = e => {
    //     this.setState({ nameText: e.currentTarget.value })
    // };

    // numberChange = e => {
    //     this.setState({ telNumber: e.currentTarget.value  })
    // };
    
    formSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmit(this.state.nameText, this.state.telNumber);

        this.setState({nameText: '', telNumber: ''});
    };

    render() {
        return (
            <form className={styles.AddContact} onSubmit={this.formSubmit}> 
  
                <label className={styles.AddContact__label}>

                    Name
                    <textarea 
                       value={this.state.nameText} 
                       onChange={this.contactChange}  
                       className={styles.AddContact__data}
                    >
                    </textarea>

                    Number
                    <input
                       type="tel"
                       name="number"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                       required
                       value={this.state.telNumber} 
                       onChange={this.numberChange} 
                       className={styles.AddContact__data}
                    />
                </label>

                <button type="submit" className={styles.AddContact__button}>Add contact</button>

            </form>
        )
    };
};

export default ContactEditor;