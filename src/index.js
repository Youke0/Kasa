import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import Error from './pages/Error/Error'
import Apropos from './pages/Apropos/Apropos'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Logement/:id" element={<Logement />} />
        <Route exact path="/Error" element={<Error />} />
        <Route exact path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)