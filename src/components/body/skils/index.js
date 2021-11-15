import React from 'react'
import './skils.css'
import Separator from '../../common/separator'
import { SkilsData } from '../../data/skils'
import SkilCard from './skil-card'
function Skils() {
    const data = SkilsData
    return (
        <div className="skils">
            <Separator/>
            <label className="section-title">Habilidades</label>
            <div className="skils-container">
                {data.map((item) => {
                    return(
                        <div className="skils-section">
                            <label className="skils-section-title">{item.type}</label>
                            <div className="skils-list">
                                {item.list.map((skil) => {
                                    return(
                                        <SkilCard skil = {skil} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skils
