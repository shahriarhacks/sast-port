import React from 'react';
import { Link } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser

} from 'react-icons/ai';

import { CgFileDocument } from 'react-icons/cg'
import { CgPhone } from 'react-icons/cg'


import './Navbar.css';

const Navbar = () => {
    return (
        <div className='mt-12 px-12'>
            <nav className='navbar nav-style'>

                <Link to="/home">
                    <AiOutlineHome className='text-2xl'>
                    </AiOutlineHome>
                    <span className='span mx-2'>Home</span>
                </Link>

                <Link to="/about">
                    <AiOutlineUser className='text-2xl'>
                    </AiOutlineUser>
                    <span className='span  mx-2'>About</span>
                </Link>

                <Link to="/skill">
                    <CgFileDocument className='text-2xl'>
                    </CgFileDocument>
                    <span className='span  mx-2'>Skill</span>
                </Link>

                <Link to="/project">
                    <AiOutlineFundProjectionScreen className='text-2xl'>
                    </AiOutlineFundProjectionScreen>
                    <span className='span  mx-2'>Project</span>
                </Link>

                <Link to="/contact">
                    <CgPhone className='text-2xl'></CgPhone>
                    <span className='span  mx-2'>Contact</span>
                </Link>
                
            </nav>
        </div>
    );
};

export default Navbar;