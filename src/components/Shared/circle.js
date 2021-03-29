import React from 'react'
import "./circle.css"

const Circle = (props) => {
    return (
        <div className={`circle-main ${props.class}`}>
            {props.children}
        </div>
    )
}

export default Circle