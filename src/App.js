import "./App.scss";
import React from "react";
import {Routes,Route,useLocation} from "react-router-dom";
import {Home} from "./containers/home/home";
import { About } from "./containers/about/about";
import { Skills } from "./containers/skills/skills";
import { Project } from "./containers/project/project";
import { Contact } from "./containers/contact/contact";
import { Resume } from "./containers/resume/resume";
import { Navbar } from "./components/navBar/navBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {particles} from "./utils.js/particles";
function App(){

  const location=useLocation();

const handleInit=async (main)=>{
  await loadFull(main);
}
 const renderParticleJsInHomePage= location.pathname==="/";
  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
      <Particles id="particles" options={particles} init={handleInit} />)
      }
      {/* navbar */}
      <Navbar/> 
      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      </div>
      

    </div>
  );
}

 export default App;