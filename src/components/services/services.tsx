import React, { } from "react";
import './services.sass'
import designer from "../../assets/imgs/Website designer-amico.png"
import img1 from "../../assets/imgs/Software engineer-amico.png"
import img2 from "../../assets/imgs/Online ads-amico.png"

function Services() {
  return (
    <section id="services" className="services">
      <h2 className="" data-aos="fade-right">SERVICIOS</h2>
      <div className="servicecards w-100" >
        <div className="servicecard" data-aos="fade-up" data-aos-delay="300">
          <img src={img1} alt="" />
          <h4 className="" > Software </h4>
          <p >
            Software creado según tus necesidades <span className="fw-bold text-black">automatizando</span> tu trabajo,
            aplicaciones para computadora y aplicaciones mobiles.
          </p>
        </div>
        <div className="servicecard" data-aos="fade-up" data-aos-delay="600">
        <img src={designer} alt="" />
        <h4 className=""> Desarrollo web </h4>
          <p>
            Páginas web para que tu negocio <span className="fw-bold text-black">destaque</span>,
            tengas un <span className="fw-bold text-black">mayor alcance </span>
            y <span className="fw-bold text-black">profesionalismo </span> incrementando tus
            <span className="fw-bold text-black"> ventas</span> y <span className="fw-bold text-black">clientes</span>
          </p>
        </div>
        {/* https://smartrural.net/wp-content/uploads/desarrollo-de-sotware-smartrural.png */}
        <div className="servicecard" data-aos="fade-up" data-aos-delay="900">
        <img src={img2} alt="" />
        <h4 className=""> Google Ads </h4>
          <p>
            Con Google Ads nos aseguramos que llegue tráfico a
            tu sitio web a través de <span className="fw-bold text-black">palabras clave</span> y tu area geográfica
            a un <span className="fw-bold text-black">costo accesible</span>.
          </p>
        </div>
        {/* <div className="servicecard" data-aos="fade-up" data-aos-delay="1200">
        <img src={media} alt=""/>
        <h4 className=""> Redes sociales </h4>
          <p style={{fontSize: "15px"}}>
            Las redes sociales se han convertido,
            en el <span className="fw-bold text-black">principal</span> medio de interacción
            de internet en todo el mundo.
            En Microweb te ayudamos con la <span className="fw-bold text-black">creación</span> y
            <span className="fw-bold text-black"> administración</span> de tus redes sociales para
            una <span className="fw-bold text-black">mayor atracción</span> de clientes.
          </p>
        </div> */}
      </div>
    </section>
  )
}
export default Services
