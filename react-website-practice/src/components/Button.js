import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// These are css styles that are inherent to the button class in CSS 
const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ( {children, type, onclick, buttonStyle, buttonSize} ) => {
        // these will either assign the button style based on arg passed, or default to a style if none
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        // this will physically return the html code that will build the button
        return (
            // the react to= tag specifies the endpoint of the url of the react server being ran, ex: url.com/sign-up
            // We will pass the onclick function to this component, which is what we will want this
            // specific button to do. { children } will be what we want for text/icon on the button
            <Link to='/sign-up' className='btn-mobile'>
                <button 
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onclick} 
                    type={type}
                >
                    { children }
                </button>
            </Link>
        )
    }