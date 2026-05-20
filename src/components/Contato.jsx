import "../styles/Contato.css";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato__container">
        <h2>Contato</h2>
        <p>Vamos conversar? Me mande uma mensagem pelo email ou WhatsApp.</p>

        <div className="contato__cards">
          <div className="contato__card">
            <FaEnvelope className="contato__icon" />
            <div>
              <h3>Email</h3>
              <p>bernardo.moraes1727@gmail.com</p>
            </div>
          </div>

          <a
            className="contato__card contato__card--link"
            href="https://wa.me/477999929294"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="contato__icon" />
            <div>
              <h3>WhatsApp</h3>
              <p>(47) 9 9992-9294</p>
            </div>
          </a>

          <div className="contato__card">
            <FaMapMarkerAlt className="contato__icon" />
            <div>
              <h3>Localização</h3>
              <p>Itajaí, SC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
