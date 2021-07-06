import React, { } from "react";
import './services.sass'
import marketing from "./social-media.svg"
function Services() {
  return (
    <section className="services">
      <h2 className="">SERVICIOS</h2>
      <div className="servicecards w-100">
        <div className="servicecard">
          <img src={marketing} alt="" />
          <h4 className=""> Marketing </h4>
          <p>
            Nuestro propósito es aumentar las ventas a
            través de procesos digitales y procurar que
            una consulta se transforme en un cliente.
          </p>
        </div>
        <div className="servicecard">
        <img src={marketing} alt="" />
        <h4 className=""> Marketing </h4>
          <p>
            Nuestro propósito es aumentar las ventas a
            través de procesos digitales y procurar que
            una consulta se transforme en un cliente.
          </p>
        </div>
        <div className="servicecard">
        <img src={marketing} alt="" />
        <h4 className=""> Marketing </h4>
          <p>
            Nuestro propósito es aumentar las ventas a
            través de procesos digitales y procurar que
            una consulta se transforme en un cliente.
          </p>
        </div>
        <div className="servicecard">
        <img src={marketing} alt="" />
        <h4 className=""> Marketing </h4>
          <p>
            Nuestro propósito es aumentar las ventas a
            través de procesos digitales y procurar que
            una consulta se transforme en un cliente.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Services
