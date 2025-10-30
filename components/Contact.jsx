import React from "react";
import './css/contact.css'
function Contact() {
    return(
        <main>

            <h2>Contact us with this form!</h2>
            <form>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name"></input><br></br>
                <label for="userEmail">Email: </label>
                <input type="email" id="userEmail" name="userEmail"></input><br></br>
                <label for="message">Message: </label>
                <input type="text" id="message" name="message"></input>
            </form>


        </main>
    );

}
export default Contact;
