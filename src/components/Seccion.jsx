function Seccion({ id, titulo, children }) {
  return (
    <section id={id} className="section-container">
      <div className="content-box">
        <h2>{titulo}</h2>
        {children}
      </div>
    </section>
  )
}

export default Seccion