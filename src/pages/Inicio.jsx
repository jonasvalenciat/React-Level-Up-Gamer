import Hero from '../components/Hero'
import Seccion from '../components/Seccion'

const detalles = [
  { etiqueta: 'Ubicación', valor: 'Sede Duoc UC Plaza Norte, Santiago.' },
  { etiqueta: 'Fecha y Hora', valor: 'Sábado 12 de Septiembre, 11:00 hrs.' },
  { etiqueta: 'Torneos', valor: 'Valorant, League of Legends y FIFA 2026.' },
  { etiqueta: 'Premios', valor: 'Puntos LevelUp, periféricos gaming y $500.000 a repartir.' },
  { etiqueta: 'Entrada', valor: 'Gratuita previo registro en el sitio web.' },
]

function Inicio() {
  return (
    <>
      <Hero
        titulo="¡DESAFÍA TUS LÍMITES!"
        subtitulo="Equípate con la mejor tecnología gamer de Chile."
        textoBoton="Ver Catálogo"
        enlace="/productos"
      />

      <Seccion id="quienes-somos" titulo="¿Quiénes Somos?">
        <p>
          En <strong>Level-Up Gamer</strong> nacimos para impulsar a la comunidad
          de eSports y entusiastas de los videojuegos en Chile. Nos dedicamos a
          ofrecer equipamiento de alto rendimiento, accesorios de nivel
          profesional y espacios de encuentro donde cada jugador puede competir,
          aprender y superar sus propios límites.
        </p>
      </Seccion>

      <Seccion id="proximo-evento" titulo="¿Dónde es nuestro próximo evento?">
        <p className="section-subtitle">
          Únete al torneo presencial más grande de la temporada. ¡Ven a competir
          o a apoyar a tus equipos favoritos!
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.342938171124!2d-70.66014282348507!3d-33.41434319561089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5be18c3534b%3A0xb35a72df03d35091!2sDuoc%20UC%3A%20Sede%20Plaza%20Norte!5e0!2m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </Seccion>

      <Seccion titulo="Detalles del Evento">
        <ul className="event-details-list">
          {detalles.map((detalle) => (
            <li key={detalle.etiqueta}>
              <strong>{detalle.etiqueta}:</strong> {detalle.valor}
            </li>
          ))}
        </ul>
      </Seccion>
    </>
  )
}

export default Inicio