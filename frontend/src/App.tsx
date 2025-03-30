import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./helpers/ScrollToTop"
import Inicio from "./pages/Inicio"
import Servicios from "./pages/Servicios"
import Paquetes from "./pages/Paquetes"

function App() {

  return (

    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
         <Route path="/" element={<Inicio />} />
         <Route path="/servicios" element={<Servicios />} />
         <Route path="/paquetes" element={<Paquetes />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
