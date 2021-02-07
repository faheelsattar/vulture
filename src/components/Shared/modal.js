import React, { useEffect } from 'react'
import "./modal.css"

const Modal = (props) => {
    useEffect(() => {
        console.log(props.isopen)
        if (props.isopen) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'visible';
        }
    })
    if (props.isopen) {
        return (
            <div className="overlay">
                <div className="modal-container">
                    <a className="modal-close" onClick={props.handleAuthOpen}>
                        <i className="fa fa-times" />
                    </a>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return <> </>
    }
}
export default Modal
