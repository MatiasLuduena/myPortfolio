// components
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";

//main
import About from "./main/About/About.tsx";
import Contact from "./main/Contact/Contact.tsx";
import Hero from "./main/Hero/Hero.tsx";
import Projects from "./main/Projects/Projects.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
