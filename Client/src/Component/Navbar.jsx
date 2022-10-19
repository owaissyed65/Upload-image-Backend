import React from 'react'
import { Link } from 'react-router-dom'
import images from '../images/download.jpg'
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {


    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={images} alt="Error Loading..." />
                    </div>
                    <ul>
                        <li><Link to='/home'><HomeIcon sx={{ fontSize: 35 }} /></Link></li>
                        <li><Link to='/form'><InsertDriveFileIcon sx={{ fontSize: 35 }} /></Link></li>
                        <li><Link to='/signup'><AccountCircleIcon sx={{ fontSize: 35 }} /></Link></li>
                        <li><Link to='/login'><LoginIcon sx={{ fontSize: 35 }} /></Link></li>
                    </ul>
                    <div className="search">
                        <input type="text" placeholder='Search...' />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
