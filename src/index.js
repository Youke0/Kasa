import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'
import Apropos from './pages/Apropos'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Apropos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>
)