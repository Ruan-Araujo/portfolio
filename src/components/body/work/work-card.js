import React from 'react'
import './work-card.css'

function WorkCard( {item} ) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo" alt="logo do local de trabalho"/>
            <div className="work-info">
                
                <label className="company-name">{item.company}</label><br/>
                
                <div>
                    <label>{item.designation}</label><br/>
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                
                <div className="work-description">
                    <p>{item.workDescription}</p>
                </div>
            </div>
        </div>
    )
}


export default WorkCard
