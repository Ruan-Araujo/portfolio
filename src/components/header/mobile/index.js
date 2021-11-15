import React from 'react'
import './mobile.css'
import close from '../img/cross.svg'
import projects from '../img/edit-alt.svg'
import skils from '../img/bulb.svg'
import work from '../img/briefcase.svg'
import contato from '../img/user.svg'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <img src={close} className="option-icons"/>
            </div>

            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project">
                        <img src={projects} className="option-icons"/> Projetos
                    </a>
                </div>

                <div className="mobile-option">
                    <a href="#skils">
                        <img src={skils} className="option-icons"/> Habilidades
                    </a>
                </div>

                <div className="mobile-option">
                    <a href="#work">
                    <img src={work} className="option-icons"/> Trabalho
                    </a>
                </div>

                <div className="mobile-option">
                    <a href="#contact">
                    <img src={contato} className="option-icons"/> Contato
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
