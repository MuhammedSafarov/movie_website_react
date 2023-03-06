import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='navbar-name'>MS Movie</div>
            <ul className="navbar-sections">
                <li>Regiter</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Header
