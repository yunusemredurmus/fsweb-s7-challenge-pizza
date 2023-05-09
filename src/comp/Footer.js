import React from 'react';
import icon1 from './icons/icon-1.png';
import icon2 from './icons/icon-2.png';
import icon3 from './icons/icon-3.png';
import inst0 from './insta/li-0.png';
import inst1 from './insta/li-1.png';
import inst2 from './insta/li-2.png';
import inst3 from './insta/li-3.png';
import inst4 from './insta/li-4.png';
import inst5 from './insta/li-5.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='anaFooter'>
            <div className='kart1'>
                <h1 id='logo1'>TEKNOLOJİK YEMEKLER</h1>
                <div className='iconText'>
                    <img src={icon1} alt='icon1' />
                    <p>341 Londonderry Road, Istanbul Türkiye</p>
                </div>
                <div className='iconText'>
                    <img src={icon2} alt='icon2' />
                    <p>aciktim@teknolojikyemekler.com</p>
                </div>
                <div className='iconText'>
                    <img src={icon3} alt='icon3' />
                    <p>+90 216 123 45 67</p>
                </div>
            </div>
            <div id='kart1-2'>
                <h1>Sıccacık Menüler</h1>
                <div className='footMenu'>
                    <a href='menu'>Terminal Pizza</a>
                    <a href='menu'>5 Kişilik Hackathlon Pizza</a>
                    <a href='menu'>useEffect Tavuklu Pizza</a>
                    <a href='menu'>Beyaz Console Frosty</a>
                </div>
            </div>
            <div id='kart1-3'>
                <h1>Instagram</h1>
                <div id='insta'>
                    <img src={inst1} alt='inst1' />
                    <img src={inst2} alt='inst2' />
                    <img src={inst3} alt='inst3' />
                    <img src={inst4} alt='inst4' />
                    <img src={inst5} alt='inst5' />
                    <img src={inst0} alt='inst0' />
                </div>
            </div>
        </div>
    );
};

export default Footer;
