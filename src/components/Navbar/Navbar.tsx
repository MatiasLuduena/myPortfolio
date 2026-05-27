import "./navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}
    >
      <a className="nav-logo" href="#home">
        <img src="/src/assets/logo.png" alt="Logo" />
        <span>Matias Ludueña</span>
      </a>
      {/* Botón Hamburguesa (Solo visible en móviles) */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
