import React from 'react';
import './karemain.css';


const KareMain = () => {

  const scrollToOptions = () => {
    const siparisegit = document.getElementById('menu-container');
    if (siparisegit) {
      siparisegit.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <div className='tumbolum' >
        <div id='kare1'>
          <h1 className='specBas'>Özel Lezzetus</h1>

          <button id='btn0' onClick={scrollToOptions}> Sipariş Ver </button>

        </div>
        <div className='sagbolum'>
          <div id='kart2'>
            <h1 className='advBaslik'>Hackathon Burger Menü</h1>

            <button id='btn1' onClick={scrollToOptions}> Sipariş Ver </button>

          </div>
          <div id='kart3'>
            <h1 className='advBaslik2'><span id='red'>Çoooook</span> hızlı npm gibi kurye </h1>

            <button id='btn1' onClick={scrollToOptions}> Sipariş Ver </button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default KareMain;
