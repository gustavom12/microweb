import React,{} from "react";
import './contact_us.sass'
function ContactUs (){
  return(
    <section id="contact_us" className="contactUs flex flex-column">
      <img data-aos="fade-right" data-aos-delay="300" src="https://i.ibb.co/VNMr1nL/mobile-2.png" alt="" />
      <h2  data-aos="fade-left" data-aos-delay="300"> ¡ CONTÁCTANOS POR WHATSAPP ! </h2>
      <a href="https://api.whatsapp.com/send?phone=5491123628091" className="flex btn-whatsapp" data-aos="fade-right" data-aos-delay="300">WHATSAPP</a>
    </section>
  )
}
export default ContactUs
