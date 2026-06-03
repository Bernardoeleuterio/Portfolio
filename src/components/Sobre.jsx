import "../styles/sobre.css";

import {
  FaGraduationCap,
  FaBriefcase,
  FaReact,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <h2>Sobre Mim</h2>

        <p className="descricao-sobre">
          Sou estudante de Engenharia de Software e apaixonado por tecnologia.
          Atualmente desenvolvo projetos web e acadêmicos buscando minha primeira oportunidade na área.
        </p>

        <div className="cards-sobre">
          <div className="card-sobre">
            <FaGraduationCap className="card-icon" />
            <h3>Formação</h3>
            <p>Engenharia de Software</p>
          </div>

          <div className="card-sobre tecnologias-card">
            <h3>Tecnologias</h3>

            <div className="tecnologias-icons">
              <FaHtml5 className="html" />
              <FaCss3Alt className="css" />
              <FaJs className="js" />
              <FaReact className="react" />
              <FaPython className="python" />
              <FaPhp className="php" />
              <FaNodeJs className="nodejs" />
              <FaGitAlt className="git" />
            </div>
          </div>

          <div className="card-sobre">
            <FaBriefcase className="card-icon" />
            <h3>Objetivo</h3>
            <p>Primeira oportunidade na área</p>
          </div>

         
        </div>
      </div>
    </section>
  );
}