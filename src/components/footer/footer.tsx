import React from "react";
import "./footer.sass";
function Footer() {
  return (
    <footer>
      <div className="iconsContainer">
      <a
        href="https://www.instagram.com/_microweb/"
        className="btn btn-1 fab fa-instagram flex"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a>
      {/* <a
        href="https://www.linkedin.com/in/gustavo-mercado-1836461a4/"
        className="btn btn-1 fab fa-linkedin flex"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a> */}
      <a
        href="https://api.whatsapp.com/send?phone=5491123628091"
        className="btn btn-1 fab fa-whatsapp flex"
        data-aos="fade-up"
        data-aos-delay="1100"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a>
      </div>
    </footer>
  );
}
export default Footer;
