import React from 'react'
import './skil-card.css'

function SkilCard({skil}) {
    return (
        <div className="skil-card">
            <div className="skil-icon">
                {skil.icon}
            </div>
            <label className="skil-name">
                {skil.name}
            </label>
        </div>
    )
}

export default SkilCard
