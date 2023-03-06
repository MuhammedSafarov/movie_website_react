import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='navbar-name'>MS Movie</h1>
            <ul className="navbar-sections">
                <li>Regiter</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Header
