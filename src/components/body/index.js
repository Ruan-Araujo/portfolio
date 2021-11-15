import React from 'react'
import './body.css'
import About from './about/index'
import Projects from './projects/index'
import Skils from './skils/index'
import Work from './work/index'
import Contact from './contact/index'

function Body() {
    return (
        <div className="body">
            
            <section id="#about">
                <About/>
            </section>

            <section id="projects">
                <Projects/>
            </section>

            <section id="skils">
                <Skils/>
            </section>

            <section id="work">
                <Work/>
            </section>

            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Body