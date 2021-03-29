import React, { useState } from 'react'
import Filledbtn from './filledbtn'
import './navbar.css'
import Modal from '../Shared/modal'
import Auth from './auth/auth'
const Navbar = (props) => {
    return (
        <div className="navbar-holder">
            <nav className="navbar navbar-expand-lg  affix nav-down">
                <div className="nav-main container">
                    <div className="logo-holder">
                        <img className="main-logo" src="./images/logo/temp-logo.svg" />
                    </div>
                    <div className="center-links">
                        <ul className="nav-links-holder navbar-left">
                            <li className="nav-link">
                                <a className="nav-ctr-lnk">Features</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-ctr-lnk"> Pricing</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-ctr-lnk">How we Work</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-ctr-lnk">Faqs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-links">
                        <ul className="nav-links-holder navbar-right">
                            <li className="nav-link">
                                <a className="nav-ctr-lnk">Join Meeting</a>
                            </li>
                            <li className="nav-link">
                                <Filledbtn text="Sign up Free" homebtnborder="btn-wt-brdr" click={props.handleAuthOpen} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar