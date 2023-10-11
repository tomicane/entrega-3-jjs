const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const pizzaIdInput = document.getElementById('pizzaId');
const searchBtn = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', function() {
  const id = parseInt(pizzaIdInput.value);

  if (isNaN(id)) {
    mostrarError("Por favor, ingrese un número válido.");
    return;
  }

  const pizza = pizzas.find(pizza => pizza.id === id);

  if (!pizza) {
    mostrarError("No se encontró ninguna pizza con ese ID.");
  } else {
    mostrarPizza(pizza);
  }
});

function mostrarError(mensageError) {
  resultDiv.innerHTML = `<p class="error">${mensageError}</p>`;
}

function mostrarPizza(pizza) {
  resultDiv.innerHTML = `
        <div class="card">
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <h2>${pizza.nombre}</h2>
            <p>Precio: $${pizza.precio}</p>
            <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
        </div>
    `;
}