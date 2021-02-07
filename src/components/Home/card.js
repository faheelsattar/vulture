import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div onClick={props.onclick} className={`card-main ${props.class}`}>
            <div className={`card-body ${props.classbody}`}>
                {props.children}
            </div>
        </div>
    )
}
export default Card