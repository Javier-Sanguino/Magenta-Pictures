export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-12 col-md-4 footer-brand">
            <h3>Magenta<span>Pictures</span></h3>
            <p>
              Productora audiovisual enfocada en contar historias
              con identidad, técnica y sensibilidad visual.
            </p>
          </div>

          <div class="col-6 col-md-4 footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-4 footer-social">
            <h4>Redes</h4>
            <ul class="social-icons">
              <li><a href="#"><i class="bi bi-instagram"></i></a></li>
              <li><a href="#"><i class="bi bi-vimeo"></i></a></li>
              <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Magenta Pictures. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}
