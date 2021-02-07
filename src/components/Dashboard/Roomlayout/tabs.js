import React from 'react'

const Tabs = (props) => {
    return (
        <div>
            <li className="sidebar-tab">
                <div className="tabs-img-holder">
                    <img className="tabs-img" src={props.img} />
                </div>
            </li>
        </div>
    )
}

export default Tabs