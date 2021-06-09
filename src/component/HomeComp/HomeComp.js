import React from 'react';
import "./homeComp.css";
import Photo from "./1.png";


function HomeComp() {
    return (
        <div className="gerardMain">
            <div className="gerard">
                <img className="gerardPic" src={Photo} alt="gerard"></img>
            </div>
            <div className="inputDiv">
                <form>
                    <input id="email" className="inputs" name="email" type="email"></input>
                    <button id="sendEmailBtn" className="contactBtn" type="submit">s u b m i t</button>
                </form>
            </div>
        </div>
    )
}

export default HomeComp
