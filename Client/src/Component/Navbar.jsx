import React from 'react'
import { Link } from 'react-router-dom'
import images from '../Component/images/download.jpg'
const Navbar = () => {
    return (
        <>
        <header>
        <nav>
            <div className="logo">
            <img src={images} alt="Error Loading..." />
            </div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/'>Page</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <div className="search">
                <input type="text" placeholder='Search...'/>
            </div>
        </nav>
        </header>
        </>
    )
}

export default Navbar
