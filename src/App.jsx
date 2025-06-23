
import './i18n';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

/*<Route path="/" element={<HomePage />} />
        
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} /> */ 