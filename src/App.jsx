import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Registro from './pages/Registro'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App