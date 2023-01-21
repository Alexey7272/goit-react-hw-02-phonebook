import React, { Component } from "react";
import styles from "./PhoneBook.module.css";

class ContactEditor extends Component {
    state = {
       nameText: ''
    }

    nameChange = e => {
        this.setState({ nameText: e.currentTarget.value })
    };
    
    formSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmit(this.state.nameText);

        this.setState({nameText: ''});
    };

    render() {
        return (
            <form className={styles.AddContact} onSubmit={this.formSubmit}> 
  
                <label className={styles.AddContact__label}>
                   Name
                    <textarea 
                       value={this.state.nameText} 
                       onChange={this.nameChange}  
                       className={styles.AddContact__name}
                    >
                    </textarea>
                </label>

                <button type="submit" className={styles.AddContact__button}>Add contact</button>

            </form>
        )
    };
}

export default ContactEditor;