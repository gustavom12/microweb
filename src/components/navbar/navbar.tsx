import React, { } from "react";
import './navbar.sass'
import useNavTitle from "../../helpers&hooks/useNavTitle"
function Navbar() {
  const scrollTo = (id:string, block:any = "end")=>{
    const element = document.getElementById(id)
    element?.scrollIntoView({block: block, behavior: "smooth"})
  }
  const isIntersecting = useNavTitle(["header","services","contact_us","portfolio"])
  return (
    <nav className="navbar bg-primary text-white">
      <div className="d-flex justify-content-between w-100">
        <h1 className="logo fw-bold flex">
          <img src="https://i.ibb.co/ySx81tQ/microweb.png" alt="" />
          MICROWEB
        </h1>
        <div className="flex">
          <div className="flex mx-2">
            <i className="fas fa-home"></i>
              <span
              className={`
                fw-bold flex text-serif fs-6 underlineHover a
                ${isIntersecting === "header" && "active"}
                `}
              onClick={()=>scrollTo("header")}
            >
              <span >HOME</span>
            </span>
          </div>
          <div className="flex mx-2">
            <i className="fas fa-headset"></i>
              <span
              className={`
              fw-bold flex text-serif fs-6 underlineHover a
              ${isIntersecting === "services" && "active"}
              `}
              onClick={()=>scrollTo("services","center")}
            >
              <span >SERVICIOS</span>
            </span>
          </div>
          <div className="flex mx-2">
            <i className="fab fa-telegram-plane"></i>
              <span
              className={`
              fw-bold flex text-serif fs-6 underlineHover a
              ${isIntersecting === "contact_us" && "active"}
              `}
              onClick={()=>scrollTo("contact_us","center")}
            >
              <span >CONTACTO</span>
            </span>
          </div>
          <div className="flex mx-2">
            <i className="fas fa-pallet"></i>
              <span
              className={`
              fw-bold flex text-serif fs-6 underlineHover a
              ${isIntersecting === "portfolio" && "active"}
              `}
              onClick={()=>scrollTo("portfolio")}
            >
              <span >PORTFOLIO</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
