import React from 'react'
import Circle from '../Shared/circle'
import './users.css'
import USER_TYPES_DATA from "./usertypesdata"

const Users = () => {
    const users = USER_TYPES_DATA.map(data => {
        return (
            <div key={data.id} className="user-type-li-holder">
                <li className={ data.id % 2 === 0 ? "user-type-single user-type-even" : "user-type-single user-type-odd"}>
                    <div>
                        <Circle class="user-type-circle">
                            <div className="user-type-img-holder">
                                <img className="user-type-img" src={data.img} />
                            </div>
                        </Circle>
                        <p className="user-type-text"> {data.text}</p>
                    </div>
                </li>
            </div>
        )
    })
    return (
        <div className="users-main">
            <div className="users-text-holder">
                <h2> World Connected</h2>
                <p>Conduct online meetings and connect people from all over the world.</p>
            </div>
            <div className="users-list-holder container">
                <ul>
                    {users}
                </ul>
            </div>
        </div>
    )
}

export default Users