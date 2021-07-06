import React, { } from "react";
function HeaderMobile() {
  return (
    <div className="onMobileText text flex flex-column">
        <h4 className="d-inline bg-primary text-white">
          Desarrollo creativo & efectivo
        </h4>
        <h2 className="d-inline">
          Desarrollo web y
          redes sociales
        </h2>
        <h3 className="d-inline bg-primary text-white">
          Páginas web a medida
        </h3>
        <p className="d-inline text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Similique veritatis minus a sed animi, quam repellat facere,
          <br />
          nostrum deserunt quod iure, id culpa non quaerat sint eveniet.
        </p>
      <div data-aos-delay={1200}>
        <button className="btn-orange fs-5 fw-bold text-white">
          Ver más
        </button>
      </div>
    </div>
  )
}
export default HeaderMobile
