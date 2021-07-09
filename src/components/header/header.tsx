import React, { } from "react";
import TextAnimation from "../a_minicomponents/textAnimation/textAnimation";
import './header.sass'
import Navbar from "../navbar/navbar";
import HeaderMobile from "./header_mobile";

function Header() {
  return (
    <header className="header bg-primary">
      <Navbar />
      <div
        className="w-100 headerContainer"
      >
        <HeaderMobile />
        <div className="hugeScreenText text">
          <TextAnimation delay={300} margin="0">
            <h4 className="d-inline animatedText bg-primary text-white">
              Desarrollo creativo & efectivo
            </h4>
          </TextAnimation>
          <TextAnimation delay={600} margin="0">
            <h2 className="d-inline animatedText">
              Desarrollo web y
              <br />
              redes sociales
            </h2>
          </TextAnimation>
          <TextAnimation delay={900} margin="0 0 10px 0">
            <h3 className="d-inline animatedText bg-primary text-white">
              Páginas web a medida
            </h3>
          </TextAnimation>
          <TextAnimation delay={1200} margin="40px 0">
            <p className="d-inline animatedText text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Similique veritatis minus a sed animi, quam repellat facere,
              <br />
              nostrum deserunt quod iure, id culpa non quaerat sint eveniet.
            </p>
          </TextAnimation>
          <TextAnimation delay={1500} margin="55px 0">
            <button className="btn-orange animatedText fs-5 fw-bold text-white">
              Ver más
            </button>
          </TextAnimation>
        </div>
        <div className="flex imgContainer" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400" >
            <img src="https://i.ibb.co/k21Gh9F/banner-img.png" alt="" />
        </div>
      </div>
    </header>
  )
}
export default Header
