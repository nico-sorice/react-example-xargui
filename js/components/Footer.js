window.AppFooter = () => {
    return (
      <footer id="footer" className="footer">
          <div className="container">
              <div className="row">
                  <div className="four columns">
                      <nav id="principal" className="menu">
                          <a className="enlace" href="#">Opciones de cuenta</a>
                          <a className="enlace" href="#">Ayuda</a>
                          <a className="enlace" href="#">¿Quieres dejarnos un comentario?</a>
                      </nav>
                  </div>
                  <div className="four columns">
                      <nav id="secundaria" className="menu">
                          <a className="enlace" href="#">¿Quienes Somos?</a>
                          <a className="enlace" href="#">Bolsa de trabajo</a>
                          <a className="enlace" href="#">Redes sociales</a>
                      </nav>
                  </div>
              </div>
          </div>
      </footer>
    )
}