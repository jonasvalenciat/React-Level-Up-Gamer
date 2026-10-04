import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProductCard from './ProductCard'

describe('TC-07: ProductCard', () => {
  it('muestra nombre, descripción, precio y botón', () => {
    render(
      <ProductCard
        codigo="JM001"
        nombre="Catan"
        descripcion="Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse."
        precio={29990}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Catan' })).toBeInTheDocument()
    expect(
      screen.getByText(
        'Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText(/\$29[.]990 CLP/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Agregar al Carrito' })).toBeInTheDocument()
  })
})
