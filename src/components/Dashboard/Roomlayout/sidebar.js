import React from 'react'
import "./sidebar.css"
import Tabs from './tabs'

const Sidebar = () => {
    return (
        <div className="sidebar-main">
            <div className="sidebar-header sdbr-pos-top">
                <ul className="sidebar-tab-holder">
                    <li className="sidebar-tab">
                        <div className="tabs-img-holder">
                            <img className="tabs-img" src="/images/logo/temp-logo.svg" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="sidebar-body sdbr-pos-center">
                <ul className="sidebar-tab-holder">
                    <Tabs img="/images/room/sidebar/video-camera.svg" />
                    <Tabs img="/images/room/sidebar/video-camera.svg" />
                    <Tabs img="/images/room/sidebar/video-camera.svg" />
                    <Tabs img="/images/room/sidebar/video-camera.svg" />
                    <Tabs img="/images/room/sidebar/video-camera.svg" />
                </ul>
            </div>
        </div>
    )
}
export default Sidebar