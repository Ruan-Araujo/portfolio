import React from 'react'
import './web.css'
import projects from '../img/edit-alt.svg'
import skils from '../img/bulb.svg'
import work from '../img/briefcase.svg'
import contato from '../img/user.svg'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                    <img src={projects} className="option-icons"alt="icone projetos"/> Projetos
                </a>
            </div>

            <div className="web-option">
                <a href="#skils">
                    <img src={skils} className="option-icons" alt="icone habilidades"/> Habilidades
                </a>
            </div>

            <div className="web-option">
                <a href="#work">
                <img src={work} className="option-icons" alt="icone trabalho"/> Trabalho
                </a>
            </div>

            <div className="web-option">
                <a href="#contact">
                <img src={contato} className="option-icons"  alt="icone contato"/> Contato
                </a>
            </div>
        </div>
    )
}

export default Web
