import ProductCard from '../components/ProductCard'
import productos from '../data/productos'

function Productos() {
  return (
    <>
      <h2 className="section-title">Catálogo de Productos</h2>
      <ul className="grid-container">
        {productos.map((producto) => (
          <ProductCard
            key={producto.codigo}
            codigo={producto.codigo}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </ul>
    </>
  )
}

export default Productos