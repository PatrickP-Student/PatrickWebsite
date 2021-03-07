import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

// NOTE: && is a shortcut that will just 'auto-return' whatever follows the && operator

function NavBar() {
    // click = variable which holds the state, setClick = function to update variable
    // the useState() function returns a value for the variable, and a function that will be used
    // to update this state, ie, update the click variable
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // this function will flip flop the boolean value of the click variable
    const handleClick = () => setClick(!click);

    // This will close the menu
    const closeMobileMenu = () => setClick(false);

    // this will display the button depending on the size of the screen, the 960 is screen pixels,
    // the button will only show up if the screen size is larger than that
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    // this will listen for the window to be resized and call the showButton() function when triggered
    window.addEventListener('resize', showButton)

    useEffect(() => {
        showButton()
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={ closeMobileMenu }>
                        <img src="/outrunner.png" height='100' alt="Placeholder"/>
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
                            <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu } >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    { button && <Button buttonStyle='btn--outline'> SIGN UP </Button> }
                </div>
            </nav>    
        </>
    )
}

export default NavBar
