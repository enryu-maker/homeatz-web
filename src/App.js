import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Contact from './Component/Contact'
import Fraud from './Component/Fraud'
import Terms from './Component/Terms'
import Privacy from './Component/Privacy'
import About from './Component/About'
import Refund from './Component/Refund'
import Shipping from './Component/Shipping'
import { ColorRing } from 'react-loader-spinner'

export default function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
    , [])
  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#bc3061', '#f7e1e1', '#E53988','#393937','#f5f5f5']}
      />
    </div>
  )
  else
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/who-we-are" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/report-fraud" element={<Fraud />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
    )
}
