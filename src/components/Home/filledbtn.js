import React from 'react'
import './filledbtn.css'

const Filledbtn = (props) => {
    return (
        <a
            className={`home-filled-btn ${props.homebtnborder} ${props.homebgborder}`}
            onClick={()=>props.click()}>
            {props.text}
        </a>
    )
}
export default Filledbtn