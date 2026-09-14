document.addEventListener("DOMContentLoaded", () => {
  const metrosInput = document.getElementById('metros');
  const metrosValor = document.getElementById('metrosValor');
  const resultado = document.getElementById('resultado');

  // Mostrar valor del slider en tiempo real
  metrosInput.addEventListener('input', () => {
    metrosValor.textContent = metrosInput.value;
  });

  // Calcular cotización al dar clic
  document.getElementById('cotizacionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const metros = parseInt(metrosInput.value);
    const ubicacion = document.getElementById('ubicacion').value;
    const servicios = document.getElementById('servicios').value;

    let precioBase = 500; // campo sin servicios
    if (ubicacion === 'ciudad') precioBase = 1000;
    let costoServicios = (servicios === 'si') ? 200 : 0;

    const precioFinalPorM2 = precioBase + costoServicios;
    const total = metros * precioFinalPorM2;

    // Mostrar título y desglose
    resultado.innerHTML = `
      <h3 class="text-center mb-3 text-primary">Desglose de cotización</h3>
      <div class="card shadow-sm p-3">
        <p>📐 Metros cuadrados: <strong>${metros} m²</strong></p>
        <p>🏙️ Ubicación: <strong>${ubicacion}</strong></p>
        <p>⚡ Servicios: <strong>${servicios === 'si' ? 'Incluidos' : 'No incluidos'}</strong></p>
        <hr>
        <p>💰 Precio base por m²: <strong>$${precioBase}</strong></p>
        <p>➕ Extra por servicios: <strong>$${costoServicios}</strong></p>
        <p>🔎 Precio final por m²: <strong>$${precioFinalPorM2}</strong></p>
        <hr>
        <h4>Total estimado: <span class="text-success">$${total.toLocaleString()} MXN</span></h4>
      </div>
    `;
  });



  
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Si el menú está abierto, lo colapsa
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
