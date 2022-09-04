// import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <NavBar name = "Rahul Gautam"/>
    <Home />
  
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  
    </>
  );
}

export default App;
