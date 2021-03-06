import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    // click = variable which holds the state, setClick = function to update variable
    // the useState() function returns a value for the variable, and a function that will be used
    // to update this state, ie, update the click variable
    const [click, setClick] = useState(false)

    // this function will flip flop the boolean value of the click variable
    const handleClick = () => setClick(!click);

    // tasdg
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src="/outrunner.png" alt="Placeholder"/>
                    </Link>
                    <div className='menu-icon' onClick={ handleClick }>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={ closeMobileMenu } >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-links' onClick={ closeMobileMenu } >
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={ closeMobileMenu } >
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={ closeMobileMenu } >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>    
        </>
    )
}

export default NavBar
