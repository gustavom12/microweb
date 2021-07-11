import React, { } from "react";
import TextAnimation from "../a_minicomponents/textAnimation/textAnimation";
import './header.sass'
import Navbar from "../navbar/navbar";
import HeaderMobile from "./header_mobile";

function Header() {
  return (
    <header className="header bg-primary" id="header">
      <Navbar />
      <div
        className="w-100 headerContainer"
      >
        <HeaderMobile />
        <div className="hugeScreenText text">
          {/* <TextAnimation delay={300} margin="0">
            <h4 className="d-inline animatedText bg-primary text-white">
              Desarrollo creativo & efectivo
            </h4>
          </TextAnimation> */}
          <TextAnimation delay={600} margin="0 0 -10px 0" >
            <h1 className="d-inline animatedText">
              Desarrollo web y
              <br />
            </h1>
          </TextAnimation>
          <TextAnimation delay={600} margin=" 0">
            <h1 className="d-inline animatedText">
              Software
              <br />
            </h1>
          </TextAnimation>
          {/* <TextAnimation delay={900} margin="0 0 10px 0">
            <h2 className="d-inline animatedText bg-primary text-white">
              Digitalizate a nuestro lado de la forma más segura
            </h2>
          </TextAnimation> */}
          <TextAnimation delay={900} margin="10px 0 20px 0">
            <h3 className="d-inline animatedText bg-primary text-white">
              Digitalizate a nuestro lado de la forma más segura
            </h3>
          </TextAnimation>
          <TextAnimation delay={1200} margin="20px 0">
            <p className="d-inline animatedText text-white">
              En <span className="fw-bold">Microweb</span> nos dedicamos a la creación de
              <br />
              páginas web <span className="fw-bold">profesionales</span> , responsivas, autoadministrables,
              <br />
              fáciles de usar y <span className="fw-bold">económicas</span>, orientadas a tu audiencia
              <br />
              para vender tus productos o servicios de la forma
              <br />
              más <span className="fw-bold">automatizada</span> y <span className="fw-bold">efectiva</span> posible.
            </p>
          </TextAnimation>
          <TextAnimation delay={1500} margin="55px 0">
            <button className="btn-orange animatedText fs-5 fw-bold text-white"
              onClick={()=>{
                const element = document.getElementById("services")
                element?.scrollIntoView({block: "center", behavior: "smooth"})
              }}
            >
              Ver más
            </button>
          </TextAnimation>
        </div>
        <div className="flex imgContainer" data-aos="fade" data-aos-duration="1500" data-aos-delay="400" >
            <img src="https://i.ibb.co/k21Gh9F/banner-img.png" alt="" />
        </div>
      </div>
    </header>
  )
}
export default Header
