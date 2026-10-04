import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Hero from './Hero'

describe('TC-02: Hero', () => {
  it('muestra el enlace "Ver Catálogo" apuntando a /productos', () => {
    render(
      <MemoryRouter>
        <Hero
          titulo="¡DESAFÍA TUS LÍMITES!"
          subtitulo="Equípate con la mejor tecnología gamer de Chile."
          textoBoton="Ver Catálogo"
          enlace="/productos"
        />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Ver Catálogo' })).toHaveAttribute(
      'href',
      '/productos',
    )
  })
})
