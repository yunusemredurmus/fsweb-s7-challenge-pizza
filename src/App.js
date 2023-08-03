import React from "react";
import Home from "./layout/Home";
import SiparisVer from "./pages/SiparisVer";
import ConfirmOrder from "./pages/ConfirmOrder";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SiparisVer/:id" element={<SiparisVer />} />
        <Route path="/confirmorder/:id" element={<ConfirmOrder />} />
      </Routes>
    </>
  );
};

export default App;
