import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import myVideo from '../assets/videos/earth.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={myVideo} autoPlay loop muted />
            <h1>PLACEHOLDER HERO SECTION TEXT</h1>
            <p>THIS IS ALSO PLACEHOLDER TEXT FOR THIS COMPONENT</p>
            <div className='hero-buttons'>
                <Button 
                className='btns' 
                buttonStyle= 'btn--outline' 
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle= 'btn--primary' 
                buttonSize='btn--large'
                >
                WATCH THIS <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
