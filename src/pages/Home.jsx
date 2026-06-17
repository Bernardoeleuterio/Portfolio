import "../styles/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/hero.png";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">Olá, eu sou o</p>

        <h1>Bernardo de Moraes Eleuterio</h1>

        <h2>Estudante de Engenharia de Software</h2>

        <p className="hero__description">
          Desenvolvedor em formação apaixonado por tecnologia, React,
          interfaces responsivas e resolução de problemas.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href="https://github.com/Bernardoeleuterio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            className="btn btn--secondary"
            href="https://www.linkedin.com/in/bernardo-de-moraes"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a className="btn btn--ghost" href="#projetos">
            Projetos
          </a>
        </div>
      </div>

      <div className="hero__imageWrap">
        <img
          className="hero__image"
          src={heroImg}
          alt="Foto de perfil de Bernardo de Moraes Eleuterio"
        />
      </div>
    </section>
  );
}
