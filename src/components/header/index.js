import React, { useState } from 'react'
import './header.css'
import Web from '../header/web/index'
import Mobile from '../header/mobile/index'
import hamburguer from '../img/list.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                My Portfolio
            </div>

            <div className="menu">
                
                <div className="webMenu">
                    <Web/>
                </div>

                <div className="mobileMenu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <img src={hamburguer} className="menu-icon"/>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
