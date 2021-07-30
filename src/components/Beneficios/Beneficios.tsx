import React,{} from 'react';
import './Beneficios.sass'
import img1 from "../../assets/imgs/Design stats-bro.png"
import img2 from "../../assets/imgs/Cloud hosting-amico.png"
import svg from "../../assets/imgs/Bug fixing-amico.svg"
const Beneficios = ()=>{
  return(
    <section id="benefits" className="benefits">
      <h2 className="" data-aos="fade-right">BENEFICIOS</h2>
      <div className="servicecards w-100" >
        <div className="servicecard" data-aos="fade-up" data-aos-delay="300">
          <img className="w-75" src={img2} alt="" />
          <h3 className="text-center" > Dominio & Hosting gratuitos </h3>
        </div>
        <div className="servicecard" data-aos="fade-up" data-aos-delay="600">
        <img className="w-75" src={img1} alt="" />
        <h3 className="text-center"> Software de gestión </h3>
        </div>
        {/* https://smartrural.net/wp-content/uploads/desarrollo-de-sotware-smartrural.png */}
        <div className="servicecard" data-aos="fade-up" data-aos-delay="900">
        <img className="w-75" src={svg} alt="" />
        <h3 className="text-center"> Mantenimiento Gratuito </h3>
        <p className="mx-2 text-center">(Hasta 3 meses)</p>
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
export default Beneficios
