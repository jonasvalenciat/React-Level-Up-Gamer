function ProductCard({ codigo, nombre, descripcion, precio }) {
  const precioFormateado = precio.toLocaleString('es-CL')

  return (
    <li className="product-card">
      <img src={`/img/${codigo}.png`} alt={nombre} className="product-img" />
      <h3>{nombre}</h3>
      <p className="product-desc">{descripcion}</p>
      <p className="product-price">${precioFormateado} CLP</p>
      <button className="btn">Agregar al Carrito</button>
    </li>
  )
}

export default ProductCard