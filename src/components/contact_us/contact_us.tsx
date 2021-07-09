import React,{} from "react";
import './contact_us.sass'
function ContactUs (){
  return(
    <section className="contactUs flex flex-column">
      <img data-aos="fade-right" data-aos-delay="300" src="https://i.ibb.co/VNMr1nL/mobile-2.png" alt="" />
      <h2 data-aos="fade-left" data-aos-delay="300"> ¡ CONTÁCTANOS POR WHATSAPP ! </h2>
      <button className="btn btn-whatsapp" data-aos="fade-right" data-aos-delay="300">WHATSAPP</button>
    </section>
  )
}
export default ContactUs
