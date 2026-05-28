import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Hi, I'm Matías 👋</h1>
      <h2 className="hero-subtitle">Full-Stack Web Developer</h2>
      <p className="hero-description">
        I build modern and scalable web applications using React, Node.js, and
        MongoDB.
      </p>
      <span className="hero-continue">Scroll down to learn more ↓</span>
    </div>
  );
};

export default Hero;
