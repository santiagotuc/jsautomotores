const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    precio: 20000,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    imagen: "civic.jpg",
    precio: 25000,
  },
  // Agrega más autos aquí
];

const destacadosContainer = document
  .getElementById("destacados")
  .querySelector(".autos-container");
const modelosContainer = document
  .getElementById("modelos")
  .querySelector(".autos-container");

function crearTarjetaAuto(auto) {
  const div = document.createElement("div");
  div.classList.add("auto");
  div.innerHTML = `
        <img src="${auto.imagen}" alt="${auto.marca} ${auto.modelo}">
        <h3>${auto.marca} ${auto.modelo}</h3>
        <p>Precio: $${auto.precio}</p>
    `;
  return div;
}

autos.forEach((auto) => {
  if (auto.destacado) {
    destacadosContainer.appendChild(crearTarjetaAuto(auto));
  }
  modelosContainer.appendChild(crearTarjetaAuto(auto));
});
