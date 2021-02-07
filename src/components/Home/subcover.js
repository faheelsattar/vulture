import React from 'react'
import Card from './card'
import "./subcover.css"
import Filledbtn from './filledbtn'

const Subcover = () => {
    return (
        <div className="subcover-main">
            <Card class="subcover-main-card" classbody="subcover-main-cardbody" >
                <div className="row">
                    <div className="col-md-7">
                        <h5 className="subcover-main-heading">Conduct online meetings from anywhere with real-time audio, video, remote control, and screen sharing.</h5>
                    </div>
                    <div className="col-md-5">
                        <div className="topcover-meeting-holder">
                            <input className="meeting-id-inpt" placeholder="Enter the meeting id" />
                            <Filledbtn text="Join Meeting" homebtnborder="subcover-btn-border" homebgborder="subcover-btn-bg" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Subcover