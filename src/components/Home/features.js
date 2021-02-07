import React, { useState } from 'react'
import './features.css'
import Card from './card'
import FEATURES_DATA from './featuresdata'

const Features = () => {
    const [clicked, setClicked] = useState(1)
    const feature = (type) => {
        let features
        if (type === "even") {
            features = FEATURES_DATA.filter(data => data.id % 2 === 0)
        }
        else if (type === "odd") {
            features = FEATURES_DATA.filter(data => data.id % 2 === 1)
        }
        const featureui = features.map(data => {
            return (
                <div>
                    <Card onclick={() => setClicked(data.id)} class={clicked === data.id ? "bx-shadow-feature" : "bx-shadow-none"} >
                        <div key={data.id} className={data.id % 2 === 0 ? "features-body features-even" : "features-body features-odd"}>
                            <div className={data.id % 2 === 0 ? "features-img-holder-even" : "features-img-holder-odd"}>
                                <img src={data.img} className="features-img" />
                            </div>
                            <div className="features-content">
                                <h5 className="features-heading">{data.heading}</h5>
                                <p className="features-text"> {data.text}</p>
                            </div>
                        </div>
                    </Card >
                </div>
            )
        })
        return featureui
    }
    return (
        <div className="features-main">
            <div className="features-text-holder">
                <h2>Get the most out of Vulture</h2>
                <p>Discover why hundreds of millions people use Vulture to chat and call every day.</p>
            </div>
            <div className="features-list">
                <div className="row vertical-align">
                    <div className="col-md-3">
                        {feature("odd")}
                    </div>
                    <div className="col-md-6">
                        <div className="meeting-ft-img-holder">
                            <img src="./images/home/dashboard.png" className="meeting-ft-img" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        {feature("even")}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features