const productos = [
  {
    id: 1,
    titulo: 'Diseñando con Illustrator',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso1.jpg',
    rating: 5,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 2,
    titulo: 'Diseñando con Photoshop',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso2.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 3,
    titulo: 'Bases de After Effects',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso3.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 4,
    titulo: 'After effects avanzado',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso4.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 5,
    titulo: 'HTML5 y CSS3',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso5.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 6,
    titulo: 'Diseño UX/UI',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso6.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 7,
    titulo: 'Bootstrap, sitios más dinámicos',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso7.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 8,
    titulo: 'Wordpress - Maquetación',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso8.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
  {
    id: 9,
    titulo: 'Wordpress - WooCommerce',
    profesor: 'Santiago XarGAY',
    imagenURL: 'img/curso9.jpg',
    rating: 4,
    precio: 4000,
    precioConDescuento: 500,
  },
];

window.HomePage = () => {
  const [carrito, setCarrito] = React.useState([]);

  const agregarProductoAlCarrito = React.useCallback((producto, cantidad) => {
    const existeProductoEnCarrito = !!carrito.find(item => item.producto.id === producto.id);

    if(existeProductoEnCarrito){
      setCarrito(
        carrito.map(item => {
          if(item.producto.id === producto.id){
            return {
              ...item,
              cantidad: item.cantidad + cantidad,
            }
          }

          return item;
        })
      );
    }else{
      setCarrito([
        ...carrito,
        {
          producto,
          cantidad
        }
      ]);
    }


  }, [setCarrito, carrito]);

  const quitarProductoDelCarrito = React.useCallback((producto, cantidad) => {
    const newCarrito = [
      ...carrito.map((item) => ({
        ...item,
        producto: {
          ...item.producto
        },
        cantidad: item.producto.id === producto.id
          ? item.cantidad - cantidad
          : item.cantidad,
      })).filter(item => item.cantidad > 0)
    ];

    setCarrito(newCarrito);
  }, [setCarrito, carrito]);

  const vaciarCarrito = React.useCallback(() => {
    setCarrito([]);
  }, []);

  return (
    <React.Fragment>

      <AppHeader
        carrito={carrito}
        vaciarCarritoHandler={vaciarCarrito}
        quitarProductoDelCarritoHandler={quitarProductoDelCarrito}
      />

      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="six columns">
              <div className="contenido-hero">
                <h2>Dejá volar tus conocimientos</h2>
                <p>¡Nos volvimos locos! <br/> Todos nuestros cursos a $500</p>
                <form action="#" id="busqueda" method="post" className="formulario">
                  <input className="u-full-width" type="text" placeholder="¿Qué estás buscando?" id="buscador"/>
                  <input type="submit" id="submit-buscador" className="submit-buscador"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="barra">
        <div className="container">
          <div className="row">
            <div className="four columns icono icono1">
              <p>+ de 300 cursos en línea <br/>
                Descubre tu potencial</p>
            </div>
            <div className="four columns icono icono2">
              <p>Certificados en el acto <br/>
                Las mejores empresas nos eligen</p>
            </div>
            <div className="four columns icono icono3">
              <p>
                Aprendé sin límites <br/> ¡Por siempre!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Catalogo
        productos={productos}
        agregarProductoAlCarritoHandler={agregarProductoAlCarrito}
      />

      <AppFooter/>

    </React.Fragment>
  )
}