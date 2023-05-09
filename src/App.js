import React from "react";
import Home from './layout/Home'
import { Routes, Route } from 'react-router-dom';
import SiparisVer from "./pages/SiparisVer";
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path ='/SiparisVer' element={<SiparisVer/>}>
       <Route path="/SiparisVer/:id" element={<SiparisVer/>}/>
       </Route>
      </Routes >

    </>
  );
};
export default App;
