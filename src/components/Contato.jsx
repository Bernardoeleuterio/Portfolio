import "../styles/Contato.css";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contato() {
    return (
        <section className="contato" id="contato">
            <h2>Contato</h2>
            <p>Entre em contato comigo por email:</p>

             <div className="contato-card">
        <div className="item-contato">
          <FaEnvelope />
          <span>bernardo.moraes1727@gmail.com</span>
        </div>

        <a
          className="item-contato contato-whatsapp"
          href="https://wa.me/477999929294"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          <span>(47) 9 9992-9294</span>
        </a>

        <div className="item-contato">
          <FaMapMarkerAlt />
          <span>Itajaí - SC</span>
        </div>
      </div>
        </section>
    );
}