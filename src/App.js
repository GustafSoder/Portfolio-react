import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Myself from "./components/Myself/Myself";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./index.css";
import "./vars.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Myself />

      <About />

      <Experience />

      <Projects />
      <Contact />
    </div>
  );
}

export default App;
