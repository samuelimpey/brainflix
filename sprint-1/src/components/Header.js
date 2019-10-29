import React from 'react'
import logo from '../assets/logo/Logo-brainflix.svg'
import avatar from '../assets/images/avatar.jpg'

export default function header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="sucks" />
            <input className="header__searchbar" type="text" placeholder="Search"></input>
            <div>
                <button className="header__button">Uplaod</button>
                <img className="header__NOOR" src={avatar} alt="the face" />
            </div>
        </header>
    )
}
