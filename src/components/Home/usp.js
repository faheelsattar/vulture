import React from 'react'
import USP_DATA from './uspdata'
import Card from './card'
import "./usp.css"
import Dashimage from './dashimage'

const Usp = () => {
    const usp = USP_DATA.map(data => {
        return (
            <div key={data.id} className="col-md-6 col-sm-6">
                <Card class="usp-card">
                    <div className="usp-img-holder">
                        <img className="usp-img" src={data.img} />
                    </div>
                    <div className="usp-content">
                        <h5 className="usp-heading"> {data.heading}</h5>
                        <p className="usp-text">{data.text}</p>
                    </div>
                </Card>
            </div>
        )
    })
    return (
        <div className="usp-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10">
                        <span class="badge badge-custom-secondary badge-pill">Key features</span>
                        <p style={{color:"#2e2f3e"}}> Vulture is secure online meeting platform designed to fullfill the needs of today,
                    which are making the remote work easy.</p>
                    </div>
                </div>
                <div className="row vertical-align" >
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            {usp}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="usp-side-img-holder">
                            <img className="usp-side-img" src="./images/home/meeting.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usp