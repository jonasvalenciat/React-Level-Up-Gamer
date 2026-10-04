import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Registro from './Registro'

describe('Registro', () => {
  it('TC-08: renderiza todos los campos y el botón', () => {
    render(<Registro />)

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Apellido')).toBeInTheDocument()
    expect(screen.getByLabelText('Fecha de nacimiento')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('tucorreo@ejemplo.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+56912345678')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Registrarte' })).toBeInTheDocument()
  })

  it('TC-09: el formulario vacío muestra el mensaje correspondiente', () => {
    render(<Registro />)

    fireEvent.submit(screen.getByRole('button', { name: 'Registrarte' }).closest('form'))

    expect(screen.getByText('Debe rellenar todas las casillas')).toBeInTheDocument()
  })
})
