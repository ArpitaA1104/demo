import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Addmission from './pages/Addmission'



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/addmission" element={<Addmission/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;