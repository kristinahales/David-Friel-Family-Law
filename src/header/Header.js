import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <header className='header-title-container'>DAVID FRIEL<br/>LAW FIRM <i id='scale' className="fas fa-balance-scale"></i></header>
            <p className='number'>801-815-5500</p>
        </div>
    )
}

export default Header;