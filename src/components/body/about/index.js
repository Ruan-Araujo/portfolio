import React from 'react'
import './about.css'
import coding from '../about/img/AboutFirst.svg'
import SocialContact from '../../common/social-contact'
function About() {
    return (
        <div className="about">
            
            <div className='about-top'>
                <div className="about-info">
                    Olá, <br/>
                    meu nome é <span className="info-name">Ruan Araújo</span>. <br/>
                    eu sou Desenvolvedor Web e Automatizador de testes!
                </div>

                <div className="about-photo">
                    <img src={coding} className="picture"/>
                </div>
            </div>

            <div className="about-bottom">
                <SocialContact/>
            </div>


        </div>
    )
}

export default About
