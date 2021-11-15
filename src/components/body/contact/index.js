import React from 'react'
import './contact.css'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
function Contact() {
    return (
        <div className="contact">
            <Separator/>
            <label className="section-title">Contato</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Quer entrar em contato ? contate-me em qualquer uma dessas plataformas</p>
                    <SocialContact/>
                </div>
                <div className="download">
                    <a>
                        <i class="devicon-googlecloud-plain colored" className="download-icon"></i>
                        Baixar CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
