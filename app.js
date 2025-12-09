let registros = [];

// Cambio de secciones en el menú
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  event.target.classList.add('active');

  if(id === "registros") renderTable();
}

// Guardar formulario
document.getElementById("dataForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = document.getElementById("edad").value.trim();

  registros.push({ nombre, correo, edad });

  document.getElementById("msg").textContent = "Registro guardado correctamente 🎉";
  this.reset();
});

// Mostrar registros
function renderTable() {
  const tbody = document.querySelector("#tablaRegistros tbody");
  tbody.innerHTML = "";

  registros.forEach(reg => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${reg.nombre}</td>
      <td>${reg.correo}</td>
      <td>${reg.edad}</td>
    `;
    tbody.appendChild(tr);
  });
}
