import React from 'react'
import CIRCLE_DATA from './circledata'
import "./topcover.css"
import Circle from './circle'
import Subcover from './subcover'

const Topcover = () => {
    const features = CIRCLE_DATA.map(data => {
        return (
            <div key={data.id} style={{ marginRight: "80px" }}>
                <Circle class="feature-circle">
                    <div className="circle-img-holder">
                        <img className="circle-img" src={data.img} />
                    </div>
                </Circle>
                <p className="circle-text"> {data.text}</p>
            </div>
        )
    })
    return (
        <div className="topcover">
            <div className="topcover-main container">
                <div className="row vertical-align">
                    <div className="col-md-6">
                        <h1 className="topcover-heading">Making Video Conferences Easy.</h1>
                        <div className="topcover-text-holder">
                            <p>For 1-1 meetings and wider group discussions. Discuss, meet and share ideas with teams  or connect with customers</p>
                        </div>
                        <div className="circle-flex">
                            {features}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="topcover-img-holder">
                            <img className="topcover-img" src="./images/home/Vulture-bg.svg" />
                        </div>
                    </div>
                </div>
                <Subcover />
            </div>
        </div>
    )
}
export default Topcover