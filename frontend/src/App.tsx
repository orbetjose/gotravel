import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./helpers/ScrollToTop"
import Inicio from "./pages/Inicio"
import Servicios from "./pages/Servicios"
import Paquetes from "./pages/Paquetes"
import Todo from "./pages/Todo"
import Blog from "./pages/Blog"

function App() {

  return (

    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
         <Route path="/" element={<Inicio />} />
         <Route path="/servicios" element={<Servicios />} />
         <Route path="/paquetes" element={<Paquetes />} />
         <Route path="/todo-incluido" element={<Todo />} />
         <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
