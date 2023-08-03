import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Footer from '../comp/Footer';
import * as yup from 'yup';
import './siparisver.css';
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

  const [formErrors, setFormErrors] = useState({});


  const schema = yup.object().shape({
    siparisnotu: yup.string().required('Sipariş notu zorunludur.'),
    malzemeler: yup.array().min(1, 'En az 1 malzeme seçmelisiniz.'),
  });




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

const navigate = useNavigate();


  const [pizzaSize, setPizzaSize] = useState("medium");

  const handleSubmit = (event) => {
    event.preventDefault();

    schema
      .validate({ siparisnotu, malzemeler, hamurkalinlik, pizzaSize })
      .then(() => {
        const data = {
          siparisnotu: siparisnotu,
          malzemeler: malzemeler,
          toplamtutar: toplamFiyat,
          ekmalzemelerin: sayilarınToplamFiyatı,
          üfiyat: ürünler.Fiyati,
        };

        fetch("https://6458cba08badff578efb0e53.mockapi.io/pizza/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            navigate(`/confirmorder/${sonSiparisId}`);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        const errors = {};
        errors.siparisnotu = error.errors[0];
        setFormErrors(errors);
      });
  };

/**
 * 
 */
  const [sonSiparisId, setSonSiparisId] = useState("");


  
  useEffect(() => {
    axios.get("https://6458cba08badff578efb0e53.mockapi.io/pizza/order")
      .then((response) => {
        const sonSiparisIdFromAPI = response.data[response.data.length - 1].id;
        const sonSiparisIdNumber = parseInt(sonSiparisIdFromAPI);
        const yeniSiparisId = sonSiparisIdNumber + 1;
        setSonSiparisId(yeniSiparisId.toString());
        console.log("En son yüklenen siparişin ID'si:", sonSiparisIdFromAPI);
      })
      .catch((error) => {
        console.error("API'den veriler alınamadı:", error);
      });
  }, []);

  /**
   * PİZZA BOYUTU GÜNC.
   * @param {setPizzaSize} event 
   */
  const handlePizzaSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };
/**
 * Sipariş notu güncellenir
 */
  const [siparisnotu, setSiparişnotu] = useState("")
  const siparisnotguncelle = (e) => {
    setSiparişnotu(e.target.value)
  }
  console.log(siparisnotu)
  console.log("Pizza Boyutum ", pizzaSize)

  /**
   * Eklenen malzemeyi checkler ve işaret var ise malzemelere seçili olanı ekler eğer seçimi kaldırırsa malzemeler içierisini kontrol eder ve siler
   * @param {setMalzemeler} event 
   */
  // Malzemelerdeki checkbox ı kontrol ediyoruz if kullanarak eğer seçiliyse malzemelerin içerisine gönderiyoruz.
  const handleMalzemeInputChange = (event) => {
    if (event.target.checked) {
      setMalzemeler([...malzemeler, event.target.value])
    } else {     //else kullanarak seçilip kaldırıldınğında malzemelerden çıkartıyoruz
      setMalzemeler(malzemeler.filter(malzeme => malzeme != event.target.value))
    }
  };

/**
 * Malzeme Kontrolü 
 */
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

  const üfiyat = ürünler.Fiyati

  const toplamFiyat = ürünler.Fiyati + sayilarınToplamFiyatı
  console.log(toplamFiyat)

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
            <Link to="/">Seçenekler</Link>
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
                      checked={malzemeler.includes(malzeme)}
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
              </label> {formErrors.siparisnotu && (
                <p className="error">{formErrors.siparisnotu}</p>
              )}
              <hr />

              <div id='sipTop'>
                <h2>Sipariş Toplamı</h2>
                <p>Seçimler: {sayilarınToplamFiyatı}</p>
                <span id='Toplamred'> Toplam: {toplamFiyat} </span>
              </div>
              <div id='sipcreate'>
                <button id="sipbu" type="submit" onClick={handleSubmit}> Sipariş Et !
                </button>


              </div>
            </form>
          </div>
          <br />
          <div>
            {/* <Switch>
              <Route path="/confirmorder/:id">
                <ConfirmOrder />
              </Route>
            </Switch> */}
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div >


  );
}

export default SiparisVer;