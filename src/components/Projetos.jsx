import "../styles/Projetos.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Meu-Bebe",
    description:
      "Aplicativo web em React para acompanhar os cuidados do bebê, com login, cadastro de usuário e registros de fraldas, sono e amamentação.",
    tech: ["React 19", "React Router DOM 7", "Material UI", "i18next", "LocalStorage"],
    repo: "https://github.com/Bernardoeleuterio/Meu-Bebe",
    live: "https://meu-bebe-snowy.vercel.app/"
  },
  {
    title: "App de Tarefas",
    description:
      "Uma aplicação para criar, editar e finalizar tarefas. Inclui filtragem, estados e interface móvel amigável.",
    tech: ["React", "JavaScript", "LocalStorage"],
    repo: "https://github.com/Bernardoeleuterio/task-app",
    live: "#"
  },
  {
    title: "Dashboard de Dados",
    description:
      "Painel com gráficos e cartões de controle para acompanhar métricas e resultados em tempo real.",
    tech: ["React", "Chart.js", "API REST"],
    repo: "https://github.com/Bernardoeleuterio/dashboard",
    live: "#"
  }
];

export default function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <div className="projetos__container">
        <h2>Projetos</h2>
        <p className="projetos__intro">
          Aqui estão alguns dos projetos em que tenho trabalhado. Clique para ver o repositório ou testar a versão online.
        </p>

        <div className="projetos__grid">
          {projects.map((project, index) => (
            <article className="projeto-card" key={index}>
              <div className="projeto-card__header">
                <h3>{project.title}</h3>
                <div className="projeto-card__tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <p className="projeto-card__description">{project.description}</p>

              <div className="projeto-card__actions">
                <a
                  className="btn btn--secondary"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> Código
                </a>
                <a
                  className="btn btn--ghost"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
