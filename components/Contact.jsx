import './css/contact.css'
import { React, useContext } from "react";
import { ThemeContext } from './header.jsx';

function Contact() {
    let mode = useContext(ThemeContext);
    return(
        <div className={mode}>

            <h2>Contact us with this form!</h2>
            <form>
                <input placeholder="name"/><br/>
                <input placeholder="email"/><br/>
                <input class="message" placeholder="message"/><br/>
                <button type="submit">Submit</button>
            </form>


        </div>
    );

}
export default Contact;
