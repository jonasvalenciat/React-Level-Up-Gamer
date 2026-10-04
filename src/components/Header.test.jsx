import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('TC-01: Header', () => {
  it('muestra el logo y los enlaces de navegación', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByText('LEVEL-UP')).toBeInTheDocument()
    expect(screen.getByText('GAMER')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Productos' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Regístrate' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Eventos' })).toBeInTheDocument()
  })
})
