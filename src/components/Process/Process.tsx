import React, { } from "react";
import TextAnimation from "../a_minicomponents/textAnimation/textAnimation";
import './Process.sass'
function Process() {
  return (
    <section className="Process ">
      <div className="">
        <TextAnimation>
          <h2 className="text-center animatedText">NUESTRO</h2>
        </TextAnimation>
        <TextAnimation>
          <h2 className="text-center animatedText">PROCESO</h2>
        </TextAnimation>
      </div>
      <div>
        <div className="fase">
          <h3>01</h3>
          <h4>PRIMER CONTACTO</h4>
          <p></p>
        </div>
        <div className="fase">
          <h4>FASE INICIAL</h4>
          <p></p>
        </div>
      </div>
      <div>
        <div className="fase">
          <h4>FASE DE DESARROLLO</h4>
          <p></p>
        </div>
        <div className="fase">
          <h4>ENTREGA FINAL</h4>
          <p></p>
        </div>
      </div>
    </section>
  )
}
export default Process
