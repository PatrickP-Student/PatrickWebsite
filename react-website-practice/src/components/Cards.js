import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out whatever the hell will go here!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="rainy1.jpg"
                        text="SOME BULLSHIT TEXT HERE"
                        label="Label 1"
                        path='/about-me'
                        />
                        <CardItem 
                        src="cyber1.jpg"
                        text="NEXT CARD"
                        label="Label 2"
                        path='/about-me'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="mtn1.jpg"
                        text="OTHER TEXT"
                        label="Label 3"
                        path='/about-me'
                        />
                        <CardItem 
                        src="cyber2.jpg"
                        text="LAST CARD?"
                        label="Label 4"
                        path='/about-me'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
