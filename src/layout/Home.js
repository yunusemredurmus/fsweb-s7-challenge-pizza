import React from 'react';
import './home.css';
import Main from '../comp/Main';
import Nav from '../comp/Nav';
import KareMain from '../comp/KareMain';
import Menu from '../comp/Menu';
import Footer from '../comp/Footer';



const Home = () => {
    return (
        <div>
            <Main />
            <Nav />
            <KareMain/>
            <Menu/>
            <Footer/>
        </div>


    );
}

export default Home;
