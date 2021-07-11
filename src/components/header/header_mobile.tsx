import React, { } from "react";
function HeaderMobile() {
  return (
    <div className="onMobileText text flex flex-column">
      <h4 className="d-inline bg-primary text-white" data-aos="fade-right">
        Desarrollo creativo & efectivo
      </h4>
      <h1 className="d-inline mb-3" data-aos="fade-left">
        Desarrollo web y
        Software
      </h1>
      <h3 className="d-inline bg-primary text-white" data-aos="fade-right">
        Digitalizate a nuestro lado de la forma más segura
      </h3>
      <p className="d-inline text-white">
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
      <div data-aos-delay={800} data-aos="fade-right">
        <button className="btn-orange fs-5 fw-bold text-white"
          onClick={() => {
            const element = document.getElementById("services")
            element?.scrollIntoView({ block: "center", behavior: "smooth" })
          }}>
          Ver más
        </button>
      </div>
    </div>
  )
}
export default HeaderMobile
