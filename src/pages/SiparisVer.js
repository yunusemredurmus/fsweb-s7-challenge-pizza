import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './siparisver.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import logo from '../comp/logo.svg'

const ekstra = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Kavurma",
  "Ceviz",
  "Zeytin",
  "Mantar",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
];


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


  const [malzemeler, setMalzemeler] = useState([]);




  const [pizzaSize, setPizzaSize] = useState("medium");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      pizzaBoyutu: pizzaSize,
      siparisnotu: siparisnotu,
      malzemeler: malzemeler,
      kalinlik: hamurkalinlik,
    };
    fetch("https://6458cba08badff578efb0e53.mockapi.io/pizza/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handlePizzaSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };

  const [siparisnotu, setSiparişnotu] = useState("")
  const siparisnotguncelle = (e) => {
    setSiparişnotu(e.target.value)
  }
  console.log(siparisnotu)
  console.log("Pizza Boyutum ", pizzaSize)

  // Malzemelerdeki checkbox ı kontrol ediyoruz if kullanarak eğer seçiliyse malzemelerin içerisine gönderiyoruz.
  const handleMalzemeInputChange = (event) => {
    if (event.target.checked) {
      setMalzemeler([...malzemeler, event.target.value])
    } else {     //else kullanarak seçilip kaldırıldınğında malzemelerden çıkartıyoruz
      setMalzemeler(malzemeler.filter(malzeme => malzeme != event.target.value))
    }
  };

  useEffect(() => {
    console.log(malzemeler)
  }, [malzemeler])

  console.log("Eksta Malzemeler", malzemeler)

  const [hamurkalinlik, SetHamurkalinlik] = useState({
    ince: false,
    kalin: false,
    normal: false,
  })


  const hamurKalinlikChange = (e) => {
    SetHamurkalinlik(e.target.value)
  }

  const malzemeSayisi = malzemeler.length;

  const sayilarınToplamFiyatı = malzemeSayisi * 5;

  const toplamFiyat = ürünler.Fiyati + sayilarınToplamFiyatı


  return (
    <div>
      <div className='siphead'>
        <Link to="/">
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div>
      </div>
      <div className='itemimg'>
        <img
          src={ürünler.img}
          alt={ürünler.PizzaAdi}
        />

      </div>
      <div className='sayfas'>
        <Breadcrumb listTag="div">
          <BreadcrumbItem>
            <Link to="/">Anasayfa</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/seçenekler">Seçenekler</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Sipariş Oluştur
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='container'>

        <div id='iia'>
          <div id='itemad'>
            <h3 >{ürünler.PizzaAdi}</h3>
          </div>
          <div id='price'>
            <p>{ürünler.Fiyati} ₺</p>
          </div>
          <div id='productdet'>
            <p className='menu-item-description1'>{ürünler.Tanim}</p>
          </div>
          <div className='boyham'>
            <div id='boyut'>


              <h2> Boyut Seç </h2>
              <form onSubmit={handleSubmit}>
                <div>

                  <label>
                    <input
                      type="radio"
                      value="small"
                      checked={pizzaSize === "small"}
                      onChange={handlePizzaSizeChange}
                      placeholder='S'
                    />
                    Small
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="medium"
                      checked={pizzaSize === "medium"}
                      onChange={handlePizzaSizeChange}
                      placeholder='M'
                    />
                    Medium
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="large"
                      checked={pizzaSize === "large"}
                      onChange={handlePizzaSizeChange}
                      placeholder='L'
                    />
                    Large
                  </label>
                </div>
              </form>
            </div>
            <div>
              <h2 htmlFor="hamurk">Hamur Seçimi</h2>
              <select id="hamurk" defaultValue="Normal" onChange={hamurKalinlikChange}>
                <option>İnce</option>
                <option>Kalın</option>
                <option>Normal</option>
              </select>
            </div>


          </div>
          <div>
            <h2> Ek Malzemeler </h2>
            <p> En fazla 10 malzeme seçebilirsiniz. 5TL </p>

            <form>
              <div id='malzform'>
                {ekstra.map((malzeme) => (
                  <label>
                    <input
                      type="checkbox"
                      id='checkmalz'
                      value={malzeme}
                      checked={malzemeler[malzeme.toLowerCase()]}
                      onChange={handleMalzemeInputChange}
                    />
                    {malzeme}
                  </label>
                ))}
              </div>
            </form>

          </div>

          <div>
            <h2>
              Sipariş Notu
            </h2>
            <form onSubmit={handleSubmit}>
              <label>
                <textarea id='txtbut' type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" value={siparisnotu} onChange={siparisnotguncelle}> </textarea>
              </label>
              <hr />

              <div id='sipTop'>
                <h2>Sipariş Toplamı</h2>
                <p>Seçimler {sayilarınToplamFiyatı}</p>
                <span id='Toplamred'> Toplam {toplamFiyat} </span>
              </div>
              <div id='sipcreate'>
                <button type="submit" >Sipariş Et</button>

              </div>
            </form>
          </div>
          <br />


        </div>
      </div>
    </div >
  );
}

export default SiparisVer;
