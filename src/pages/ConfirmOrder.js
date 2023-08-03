import React, { useState, useEffect } from 'react';
import { useParams,  } from 'react-router-dom';
import axios from 'axios';
import logo from '../comp/logo.svg';
import Footer from '../comp/Footer';
import './confirmorder.css';

const ConfirmOrder = () => {
    const { id } = useParams();
    const [confirmed, setConfirmed] = useState([]);
    const orderNumber = Math.floor(Math.random() * 1000000);
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://6458cba08badff578efb0e53.mockapi.io/pizza/order/${id}`)
            .then(response => {
                setConfirmed(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);



    axios
        .get(`https://6458cba08badff578efb0e53.mockapi.io/pizza/Pizza/2`)
        .then(res => {
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err);
        });

    // 5 dakika (300000 ms) 5 dk sonra güncellenecek 



    return (
        <div>
            <div className='mainbg'>
                <div id='mainhead'>
                    <img src={logo} alt='logo' />
                </div>
                <div id=' confirmtx'>
                    <h2 id='lezzetyol'>
                        lezzetin yolda
                    </h2>
                    <h1 style={{ fontFamily: "'Barlow', sans-serif", color: "white", display: "flex", justifyContent: "center", fontSize: "50px" }}>
                        Sipariş Alındı #{orderNumber}
                    </h1>
                    <div className='orderDef'>
                        <div id='hr'>
                            <hr />
                            <h3 id='ad'>{products.PizzaAdi} </h3>
                            <div id='icerik2'>
                                <div id='icerikpizza'>

                                    <h3>
                                        Boyut : {confirmed.pizzaBoyutu} </h3>
                                    <h3>  Hamur :  </h3>
                                    <h3>  Ek Malzemeler : {confirmed.malzemeler}</h3>

                                </div>

                            </div>
                            <div id='totalorder'>
                                <h3>
                                    Ürün Fiyatı : {confirmed.üfiyat} </h3>
                                <h3>  Toplam: {confirmed.toplamtutar} </h3>
                                <h3>  Seçimler : {confirmed.ekmalzemelerin}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
export default ConfirmOrder;