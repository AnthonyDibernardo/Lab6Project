import React from "react";
import './css/contact.css'
function Contact() {
    return(
        <div>

            <h2>Contact us with this form!</h2>
            <form>
                <input placeholder="name"/><br/>
                <input placeholder="email"/><br/>
                <input placeholder="message"/><br/>
                <button type="submit">Submit</button>
            </form>


        </div>
    );

}
export default Contact;
