import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Inicio from './Inicio'

function renderInicio() {
  return render(
    <MemoryRouter>
      <Inicio />
    </MemoryRouter>,
  )
}

describe('Inicio', () => {
  it('TC-03: muestra el título del banner', () => {
    renderInicio()

    expect(screen.getByRole('heading', { name: '¡DESAFÍA TUS LÍMITES!' })).toBeInTheDocument()
  })

  it('TC-04: muestra las secciones principales', () => {
    renderInicio()

    expect(screen.getByRole('heading', { name: '¿Quiénes Somos?' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '¿Dónde es nuestro próximo evento?' }),
    ).toBeInTheDocument()
  })

  it('TC-05: muestra los ítems del detalle del evento', () => {
    renderInicio()

    expect(screen.getByText(/Ubicación:/)).toBeInTheDocument()
    expect(screen.getByText(/Fecha y Hora:/)).toBeInTheDocument()
    expect(screen.getByText(/Torneos:/)).toBeInTheDocument()
    expect(screen.getByText(/Premios:/)).toBeInTheDocument()
    expect(screen.getByText(/Entrada:/)).toBeInTheDocument()
  })
})
