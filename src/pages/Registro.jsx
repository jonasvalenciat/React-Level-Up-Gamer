import { useState } from 'react'
import { hayCamposVacios, correoValido, telefonoValido, esCorreoDuoc } from '../utils/validaciones'

function Registro() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
  })
  const [mensaje, setMensaje] = useState('')

  function manejarCambio(evento) {
    setDatos({ ...datos, [evento.target.name]: evento.target.value })
  }

  function manejarEnvio(evento) {
  evento.preventDefault()

  if (hayCamposVacios(datos)) {
    setMensaje('Debe rellenar todas las casillas')
    return
  }

  if (!correoValido(datos.email) || !telefonoValido(datos.telefono)) {
    setMensaje('El correo o el teléfono no tienen el formato correcto')
    return
  }

  if (esCorreoDuoc(datos.email)) {
    setMensaje('Registro exitoso. ¡Felicidades! Tienes un descuento especial por ser parte de Duoc UC.')
    return
  }

  setMensaje('Registro exitoso. ¡Bienvenido a Level-Up Gamer!')
}

  return (
    <section className="login">
      <div className="register-card">
        <h2>Crear cuenta</h2>
        <p className="register-subtitle">Únete a Level-Up Gamer</p>

        <form onSubmit={manejarEnvio} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={datos.nombre}
                onChange={manejarCambio}
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={datos.apellido}
                onChange={manejarCambio}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={datos.fechaNacimiento}
              onChange={manejarCambio}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              value={datos.email}
              onChange={manejarCambio}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+56912345678"
              value={datos.telefono}
              onChange={manejarCambio}
            />
          </div>

          <button type="submit" className="btn-registrar">Registrarte</button>
          <p className="form-message">{mensaje}</p>
        </form>
      </div>
    </section>
  )
}

export default Registro