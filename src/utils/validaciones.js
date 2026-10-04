// Revisa que ninguna casilla esté vacía
export function hayCamposVacios(datos) {
  if (datos.nombre.trim() === '') {
    return true
  }
  if (datos.apellido.trim() === '') {
    return true
  }
  if (datos.fechaNacimiento.trim() === '') {
    return true
  }
  if (datos.email.trim() === '') {
    return true
  }
  if (datos.telefono.trim() === '') {
    return true
  }
  return false
}

// Revisa que el correo tenga algo@algo.algo
export function correoValido(correo) {
  // Debe contener un @
  if (!correo.includes('@')) {
    return false
  }

  // Separamos en dos partes: lo de antes y lo de después del @
  const partes = correo.split('@')
  const antes = partes[0]
  const despues = partes[1]

  // No puede haber nada antes del @
  if (antes === '') {
    return false
  }

  // Después del @ debe haber un punto
  if (!despues.includes('.')) {
    return false
  }

  // Y el punto no puede ser el último caracter (ej: hola@gmail.)
  if (despues.endsWith('.')) {
    return false
  }

  return true
}

// Revisa que el teléfono empiece con + y tenga 12 caracteres
export function telefonoValido(telefono) {
  // Quitamos los espacios (ej: "+56 9 1234 5678" -> "+56912345678")
  const sinEspacios = telefono.replaceAll(' ', '')

  if (!sinEspacios.startsWith('+')) {
    return false
  }

  if (sinEspacios.length !== 12) {
    return false
  }

  return true
}

// Revisa si el correo termina en @duocuc.cl
export function esCorreoDuoc(correo) {
  if (correo.endsWith('@duocuc.cl')) {
    return true
  }
  return false
}