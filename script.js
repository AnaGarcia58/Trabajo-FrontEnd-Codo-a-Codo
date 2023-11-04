document.addEventListener("DOMContentLoaded", function () {
    let selectedCategory = "junior";

    function updateTicketPrice(category) {
        selectedCategory = category;
        document.getElementById("categoria").value = category;

        let price = 0; // Precio unitario (inicialmente 0)
        let quantity = parseInt(document.getElementById("cantidad").value, 10);

        const cantidadField = document.getElementById("cantidad");

        cantidadField.addEventListener("input", function () {
            const quantity = parseInt(cantidadField.value, 10);

            if (quantity < 1 || isNaN(quantity)) {
            } else {
                updateTicketPrice(selectedCategory);
            }
        });

        if (category === "estudiante") {
            price = 47; // Precio para Estudiante
        } else if (category === "trainee") {
            price = 117; // Precio para Trainee
        } else if (category === "junior") {
            price = 200; // Precio para Junior
        }

        // Calcular el precio total en función de la cantidad
        let totalPrice = price * quantity;

        document.getElementById("ticket-price").textContent = " " + price;
        document.getElementById("total-price").textContent = "" + totalPrice;

        categoryBoxes.forEach((box) => {
            if (box.id === selectedCategory) {
                box.classList.add("selected");
            } else {
                box.classList.remove("selected");
            }
        });
    }
    
    const categoryBoxes = document.querySelectorAll(".category-box");
    categoryBoxes.forEach((categoryBox) => {
        categoryBox.addEventListener("click", function () {
            updateTicketPrice(categoryBox.id);
        });
    });

    const ticketForm = document.getElementById("ticket-form");
    ticketForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    const borrarButton = document.getElementById("borrar");
    borrarButton.addEventListener("click", function () {
        ticketForm.reset();
        selectedCategory = "junior";
        updateTicketPrice(selectedCategory);
    });

    const resumenButton = document.getElementById("resumen");
    resumenButton.addEventListener("click", function () {

    });

    const categoriaSelect = document.getElementById("categoria");
    const ticketPriceElement = document.getElementById("ticket-price");
    const totalPriceElement = document.getElementById("total-price");

    categoriaSelect.addEventListener("change", function () {
        const selectedCategory = categoriaSelect.value;
        updateTicketPrice(selectedCategory);
    });
});

document.addEventListener("DOMContentLoaded", function () {


    const resumenButton = document.getElementById("resumen");
    const resumenCompra = document.getElementById("resumen-compra");

    resumenButton.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const cantidad = document.getElementById("cantidad").value;
        const categoria = document.getElementById("categoria").value;
        const precioTotal = document.getElementById("total-price").textContent;

        const resumenHTML = `
            <h2>Resumen de la Compra</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Cantidad de Tickets:</strong> ${cantidad}</p>
            <p><strong>Categoría:</strong> ${categoria}</p>
            <p><strong>Precio Total:</strong>  $ ${precioTotal}</p>
        `;

        resumenCompra.innerHTML = resumenHTML;
        resumenCompra.style.display = "block";
    });
});

// ...
const cantidadField = document.getElementById("cantidad");
const categoriaSelect = document.getElementById("categoria");

cantidadField.addEventListener("input", function () {
    updateTicketPrice(selectedCategory);
});

categoriaSelect.addEventListener("change", function () {
    updateTicketPrice(selectedCategory);
});

