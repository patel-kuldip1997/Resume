// App.js
// import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <div className="row g-5">
        <Sidebar />
        <div className="col-lg-8">
          <About />
          <Skills />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
      <a className="back-to-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  >
    <i className="fa fa-angle-double-up"></i>
  </a>
    </div>
 
  );
}

export default App;
