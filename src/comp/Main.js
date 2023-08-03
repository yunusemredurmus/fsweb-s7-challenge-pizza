import Typed from "typed.js";
import { useEffect } from "react";
import "./main.css";
import logo from "./logo.svg";

const Main = () => {
  const scrollToOptions = () => {
    const optionsElement = document.getElementById("navbar");
    if (optionsElement) {
      optionsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      strings: ["KOD ACIKTIRIR PIZZA, DOYURUR"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typingEffect = new Typed(".multitext", options);

    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <div>
      <div className="mainbck">
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="tx">
          <p> fırsatı kaçırma </p>
        </div>
        <div id="kodtx">
          <span className="multitext"></span>
        </div>
        <div id="but">
          <button id="main-button" onClick={scrollToOptions}>
            ACIKTIM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
