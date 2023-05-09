import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../comp/Main';



const SiparisVer = () => {
  const { id } = useParams();
  console.log("merhaba", id)
  const [ürünler, setÜrünler] = useState([]);
  useEffect(() => {
    axios.get(`https://6458cba08badff578efb0e53.mockapi.io/pizza/Pizza/${id}`)
      .then(response => {
        setÜrünler(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (


    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Adınız Soyadınız:
          <input type="text" value={adSoyad} onChange={(e) => setAdSoyad(e.target.value)} />
        </label>
        <label>
          Adres:
          <input type="text" value={adres} onChange={(e) => setAdres(e.target.value)} />
        </label>
        <label>
          Telefon:
          <input type="text" value={telefon} onChange={(e) => setTelefon(e.target.value)} />
        </label>
        <label>
          Notlar:
          <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} />
        </label>
        <button type="submit">Siparişi Tamamla</button>
      </form>
      <div className='menu-item-details1'>
        <h3 className='menu-item-name1'>{ürünler.PizzaAdi}</h3>
        <p className='menu-item-description1'>{ürünler.Açıklama}</p>
        <p className='menu-item-price1'>{ürünler.Fiyati} ₺</p>
      </div>
    </div>
  )
}

export default SiparisVer
