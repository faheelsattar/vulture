import React from 'react'
import "./auth.css"
import Loginbtn from './loginbtn'

const Auth = () => {
    const button = [{
        id: 1,
        name: "Google Login",
        img: "./images/home/auth/google.svg"
    }, {
        id: 2,
        name: "Facebook Login",
        img: "./images/home/auth/facebook.svg"
    }].map(data => {
        return (
            <Loginbtn data={data} />
        )
    })
    return (
        <div className="auth-holder">
            <div className="auth-content">
                <h3 className="auth-heading"> Sign in to </h3>
                <div className="auth-logo-holder">
                    <img className="auth-logo" src="./images/logo/temp-logo.svg" />
                    <h3 className="auth-logo-heading"> Vulture </h3>
                </div>
                <p className="auth-para"> Log in to save your progress. We won't post anything anywhere. </p>
            </div>
            <div className="auth-btn-holders">
                {button}
            </div>
        </div>
    )
}
export default Auth