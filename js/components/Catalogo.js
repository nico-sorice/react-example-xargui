window.Catalogo = ({
                     productos,
                     agregarProductoAlCarritoHandler
}) => {

  // Partimos el array de productos en grupos de 3 para que ande el maquetado (meter un div class=row cada 3)
  const lineas = React.useMemo(() => {
    const chunks = [];
    let i = 0;

    while (i < productos.length) {
      chunks.push(productos.slice(i, i += 3));
    }

    return chunks;
  }, [productos]);


  return (
    <div id="lista-cursos" className="container">

      <h1 id="encabezado" className="encabezado">
        ¡Elige tu curso!
      </h1>

      {lineas.map((productosDeLaLinea, i) => (
        <div className="row" key={i}>
          {productosDeLaLinea.map((producto, i) => (
            <div key={producto.id} className="four columns">
              <div className="card">
                <img
                  src={producto.imagenURL}
                  className="imagen-curso u-full-width"
                />
                <div className="info-card">
                  <h4>{producto.nombre}</h4>
                  <p>{producto.profesor}</p>
                  <img src="img/estrellas.png"/>
                  <p className="precio">
                    ${producto.precio} <span className="u-pull-right ">${producto.precioConDescuento}</span>
                  </p>
                  <a
                    onClick={() => agregarProductoAlCarritoHandler(producto, 1)}
                    href="#"
                    className="u-full-width button-primary button input agregar-carrito"
                  >
                    Agregar Al Carrito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}