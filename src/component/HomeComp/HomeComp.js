import React from 'react';
import "./homeComp.css";
import Photo from "./1.png";
import emailjs from "emailjs-com"


function HomeComp() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_sdicncv', 'template_xdbvob1', e.target, 'user_DhUaWJfNkc42ZUfzTBjVL')
            .then((result) => {
                console.log(result.text);
                alert("Email sent!")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }

    return (
        <div className="gerardMain">
            <div className="gerard">
                <img className="gerardPic" src={Photo} alt="gerard"></img>
            </div>
            <div className="inputDiv">
                <form onSubmit={sendEmail}>
                    <div className="btnBorder">
                        <input id="email" className="inputs" name="email" type="email"></input>
                    </div>
                    <button id="sendEmailBtn" className="contactBtn" type="submit">s u b m i t</button>
                </form>
            </div>
        </div>
    )
}

export default HomeComp
