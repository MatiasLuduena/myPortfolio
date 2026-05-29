import "./navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); // Estado para detectar si el usuario hizo scroll
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const [activeSection, setActiveSection] = useState(""); // Estado para el link activo

  useEffect(() => {
    // Logica scroll
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // logica para detectar sección activa
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detecta la sección cuando está en el centro de la pantalla
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Guarda el ID activo (ej: 'projects')
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
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
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className={activeSection === "home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
