import React from 'react';
import './karemain.css';
import { Link, Switch, Route } from 'react-router-dom';
import SiparisVer from '../pages/SiparisVer';

const KareMain = () => {
  return (
    <div>
      <div className='tumbolum' >
        <div id='kare1'>
          <h1 className='specBas'>Özel Lezzetus</h1>

          <button id='btn0'> Sipariş Ver </button>

        </div>
        <div className='sagbolum'>
          <div id='kart2'>
            <h1 className='advBaslik'>Hackathon Burger Menü</h1>

            <button id='btn1'> Sipariş Ver </button>

          </div>
          <div id='kart3'>
            <h1 className='advBaslik2'><span id='red'>Çoooook</span> hızlı npm gibi kurye </h1>

            <button id='btn1'> Sipariş Ver </button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default KareMain;
