import { Link } from 'react-router-dom'

function Hero({ titulo, subtitulo, textoBoton, enlace }) {
  return (
    <section className="hero-portada">
      <div className="hero-content">
        <h1>{titulo}</h1>
        <p className="hero-subtitle">{subtitulo}</p>
        <Link to={enlace} className="btn-primary">{textoBoton}</Link>
      </div>
    </section>
  )
}

export default Hero