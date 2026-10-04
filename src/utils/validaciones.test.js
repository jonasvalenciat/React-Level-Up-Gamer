import { describe, expect, it } from 'vitest'
import {
  correoValido,
  esCorreoDuoc,
  hayCamposVacios,
  telefonoValido,
} from './validaciones'

describe('TC-10: funciones de validación', () => {
  const datosCompletos = {
    nombre: 'Ana',
    apellido: 'Pérez',
    fechaNacimiento: '2000-01-01',
    email: 'ana@ejemplo.com',
    telefono: '+56912345678',
  }

  it('valida si hay campos vacíos', () => {
    expect(hayCamposVacios(datosCompletos)).toBe(false)
    expect(hayCamposVacios({ ...datosCompletos, nombre: '' })).toBe(true)
  })

  it('valida correos', () => {
    expect(correoValido('usuario@ejemplo.com')).toBe(true)
    expect(correoValido('usuario@ejemplo')).toBe(false)
    expect(correoValido('@ejemplo.com')).toBe(false)
  })

  it('valida teléfonos', () => {
    expect(telefonoValido('+56912345678')).toBe(true)
    expect(telefonoValido('+56 9 1234 5678')).toBe(true)
    expect(telefonoValido('56912345678')).toBe(false)
  })

  it('identifica correos de Duoc UC', () => {
    expect(esCorreoDuoc('alumno@duocuc.cl')).toBe(true)
    expect(esCorreoDuoc('alumno@gmail.com')).toBe(false)
  })
})
