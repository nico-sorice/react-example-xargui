window.AppHeader = ({
  carrito,
  vaciarCarritoHandler,
  quitarProductoDelCarritoHandler,
}) => {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="four columns">
                        <img src="/img/logo.jpg" id="logo"/>
                    </div>
                    <div className="two columns u-pull-right">
                        <ul>
                            <li className="submenu">
                                <img src="img/cart.png" id="img-carrito"/>
                                    <div id="carrito">
                                        <table id="lista-carrito" className="u-full-width">
                                            <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    carrito.map(item => (
                                                      <tr key={item.producto.id}>
                                                          <td>
                                                              <img src={item.producto.imagenURL} width="100"/>
                                                          </td>
                                                          <td>{item.producto.titulo}</td>
                                                          <td>${item.producto.precioConDescuento}</td>
                                                          <td>{item.cantidad} </td>
                                                          <td>
                                                              <a
                                                                onClick={() => quitarProductoDelCarritoHandler(item.producto, 1)}
                                                                href="#"
                                                                className="borrar-curso"
                                                              >
                                                                  X
                                                              </a>
                                                          </td>
                                                      </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        <a
                                          onClick={vaciarCarritoHandler}
                                          href="#"
                                          id="vaciar-carrito"
                                          className="button u-full-width"
                                        >
                                            Vaciar Carrito
                                        </a>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}