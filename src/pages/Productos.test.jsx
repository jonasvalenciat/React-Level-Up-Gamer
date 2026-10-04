import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Productos from './Productos'

describe('TC-06: Productos', () => {
  it('renderiza los productos del catálogo', () => {
    render(<Productos />)

    expect(screen.getByRole('heading', { name: 'Catálogo de Productos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Catan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Carcassonne' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PlayStation 5' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'PC Gamer ASUS ROG Strix' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Agregar al Carrito' })).toHaveLength(10)
  })
})
