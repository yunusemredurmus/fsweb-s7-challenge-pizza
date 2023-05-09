import React from 'react';
import './main.css';
import logo from './logo.svg';

const Main = () => {

    const scrollToOptions = () => {
        const optionsElement = document.getElementById('navbar');
        if (optionsElement) {
            optionsElement.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div>
            <div className='mainbck'>
                <div id='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div id='tx'>
                    <p> fırsatı kaçırma </p>
                </div>
                <div id='kodtx'>
                    <p> KOD ACIKTIRIR PIZZA, DOYURUR </p>
                </div>
                <div id='but'>
                    <button id='main-button' onClick={scrollToOptions}>ACIKTIM</button>
                </div>
            </div>

        </div>
    );
};

export default Main;
