import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Contact from './Component/Contact'
import Fraud from './Component/Fraud'
import Terms from './Component/Terms'
import Privacy from './Component/Privacy'

export default function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="/report-fraud" element={<Fraud />} />
    <Route path="/terms-and-conditions" element={<Terms />} />
   </Routes>
  )
}
