import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">Bernardo de Moraes Eleuterio</div>
      <nav className="navbar__menu">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
