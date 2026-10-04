import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <span className="level-up">LEVEL-UP</span>
        <span className="gamer">GAMER</span>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/registro">Regístrate</Link></li>
          <li><Link to="/#proximo-evento">Eventos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header