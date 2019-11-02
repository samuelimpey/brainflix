import React from 'react'
import logo from '../assets/logo/Logo-brainflix.svg'
import avatar from '../assets/images/avatar.jpg'

export default function header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="sucks" />
            <input className="header__searchbar" type="text" placeholder="Search"></input>
            <div className="header__button-section">
                <button className="header__button-section--button">Uplaod</button>
                <img className="header__button-section--NOOR" src={avatar} alt="the face" />
            </div>
        </header>
    )
}
