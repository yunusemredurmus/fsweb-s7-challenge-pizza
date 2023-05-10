import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icon1 from './icons/1.svg';
import icon2 from './icons/2.svg';
import icon3 from './icons/3.svg';
import icon4 from './icons/4.svg';
import icon5 from './icons/5.svg';
import icon6 from './icons/6.svg';
import './menu.css';
import SiparisVer from '../pages/SiparisVer';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://6458cba08badff578efb0e53.mockapi.io/pizza/Pizza')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);



    return (
        <div>
            <div id='menu-container'>
                <h1 id='menubas'>en çok paketlenen menüler</h1>
                <h2 id='menubas2'>Acıktıran Kodlara Doyuran Lezzetler</h2>
            </div>
            <div className='navbar'>
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
            <div className='tumMenu'>
                {products.map((product) => (
                    <Link key={product.id} to={`/siparisver/${product.id}`}>
                        <div key={product.id} className='menu-item'
                        >
                            <img
                                className='menu-item-image'
                                src={product.img}
                                alt={product.PizzaAdi}
                            />
                            <div className='menu-item-details'>
                                <h3 className='menu-item-name'>{product.PizzaAdi}</h3>
                                <p className='menu-item-description'>{product.Açıklama}</p>
                                <p className='menu-item-price'>{product.Fiyati} ₺</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;