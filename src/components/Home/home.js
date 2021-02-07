import React, { useState } from 'react'
import Dashimage from './dashimage'
import Navbar from './navbar'
import Topcover from './topcover'
import Users from './users'
import Usp from './usp'
import Features from './features'
import Reviews from './reviews'
import Modal from '../Shared/modal'
import Auth from './auth/auth'
const Home = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Navbar handleAuthOpen={() => setOpen(true)} />
            <Topcover />
            <Usp />
            <Users />
            <Features />
            <Reviews />
            <Modal isopen={open} handleAuthOpen={() => setOpen(false)}>
                <Auth />
            </Modal>
        </div>
    )
}

export default Home