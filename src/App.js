import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import ProjectDisplay from "./pages/ProjectDisplay";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router basename="/doriswz.github.io">
        <Navbar/> 
        <Routes> 
<<<<<<< HEAD
=======
   
>>>>>>> ae60a6aa124672f95b2c081c6218736088579b56
          <Route path="/" element={<Home />}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
        </Routes>
<<<<<<< HEAD
        
=======
>>>>>>> ae60a6aa124672f95b2c081c6218736088579b56
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
