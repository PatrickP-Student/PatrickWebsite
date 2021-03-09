import React from 'react'
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    SOME OTHER BULLSHIT TEXT GOES HERE TOO
                </p>
                <p className='footer-subscription-text'>
                    AND NEXT TEXT
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Your email' 
                        className='footer-input' 
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us </h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Next Section </h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us </h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Next Section </h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/sign-up'>Testimonials</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Investors</Link>
                        <Link to='/sign-up'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            <img src="/outrunner.png" height='100' alt="Placeholder"/>
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Patrick © 2021
                    </small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' 
                        to={{ pathname: "https://www.facebook.com/PatrickPickard017" }} 
                        target="_blank"
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link 
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link 
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
