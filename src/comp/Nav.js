import React from 'react'
import icon1 from './icons/1.svg';
import icon2 from './icons/2.svg';
import icon3 from './icons/3.svg';
import icon4 from './icons/4.svg';
import icon5 from './icons/5.svg';
import icon6 from './icons/6.svg';
import './nav.css';
const Nav = () => {
    return (
        <div className='navbar' id='navbar'>
            <div className='nav2'>
                <div className='nav-item'>
                    <img src={icon1} alt='icon1' />
                    <p>YENİ!Kore</p>
                </div>
                <div className='nav-item'>
                    <img src={icon2} alt='icon2' />
                    <p>Pizza</p>
                </div>
                <div className='nav-item'>
                    <img src={icon3} alt='icon3' />
                    <p>Burger</p>
                </div>
                <div className='nav-item'>
                    <img src={icon4} alt='icon4' />
                    <p>Kızartmalar</p>
                </div>
                <div className='nav-item'>
                    <img src={icon5} alt='icon5' />
                    <p>Fast food</p>
                </div>
                <div className='nav-item'>
                    <img src={icon6} alt='icon6' />
                    <p>Gazlı İçecekler</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
