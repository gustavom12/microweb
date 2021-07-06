import React, { } from "react";
import './navbar.sass'
function Navbar() {
  return (
    // <nav className="d-flex justify-content-between">
    //   <div className="logo">
    //     <h1 className="fw-bolder">Microweb</h1>
    //   </div>
    //   <div className="divs flex">
    //     <a href="">
    //       <i className="fas fa-home"></i>
    //       HOME
    //     </a>
    //     <a href="">
    //       <i className="fas fa-home"></i>
    //       SERVICIO
    //     </a>
    //     <a href="">
    //       <i className="fas fa-home"></i>
    //       PORTFOLIO
    //     </a>
    //   </div>
    // </nav>
    <nav className="navbar bg-primary text-white">
      <div className="d-flex justify-content-between w-100">
        <h1 className="logo fw-bold">MICROWEB</h1>
        <div className="flex">
          <div className="flex mx-2">
            <i className="fas fa-home"></i>
              <a
              className="fw-bold flex text-serif fs-6 underlineHover active"
              href="/home"
            >
              <span >HOME</span>
            </a>
          </div>
          <div className="flex mx-2">
            <i className="fas fa-headset"></i>
              <a
              className="fw-bold flex text-serif fs-6 underlineHover"
              href="/home"
            >
              <span >SERVICIOS</span>
            </a>
          </div>
          <div className="flex mx-2">
            <i className="fab fa-telegram-plane"></i>
              <a
              className="fw-bold flex text-serif fs-6 underlineHover"
              href="/home"
            >
              <span >CONTACTO</span>
            </a>
          </div>
          <div className="flex mx-2">
            <i className="fas fa-pallet"></i>
              <a
              className="fw-bold flex text-serif fs-6 underlineHover"
              href="/home"
            >
              <span >PORTFOLIO</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
