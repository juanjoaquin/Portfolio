// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Proyectos/Proyects'
import AboutMe from './components/AboutMe/AboutMe'
import Certificados from './components/Certificados/Certificados'
import ContactMe from './components/ContactMe/ContactMe'
import Skills from './components/Skills/Skills'
import Socials from './components/Contact/Socials'
import { BrowserRouter } from 'react-router-dom'



function App() {


  return (

    
    <>
    <BrowserRouter>
    <NavBar/>
    <Profile />
    <Projects />
    <AboutMe />
    <Certificados />
    <Skills />
    <ContactMe />

    <Socials />
    
    </BrowserRouter>
    
      {/* <BrowserRouter>
      <NavBar />

      <Routes>
      <Route path='/' element={<Profile />}/>
        
      </Routes>

      </BrowserRouter> */}
    </>
  )
}

export default App

