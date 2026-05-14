// ============================================
// SCRIPT PRINCIPAL - PetFlow Arg
// ============================================

// Esperamos a que TODO el HTML cargue antes de ejecutar el JS
document.addEventListener("DOMContentLoaded", function () {

    console.log("PetFlow Arg cargado correctamente");

    // ============================================
    // FUNCIONALIDAD 1: Boton "Ver productos" del hero
    // Hace scroll suave hasta la seccion productos
    // ============================================

    // Agarramos el boton dentro de la seccion #inicio
    const botonVerProductos = document.querySelector("#inicio button");

    // Agarramos la seccion de productos a la que queremos ir
    const seccionProductos = document.querySelector("#productos");

    // Le decimos al boton: "cuando te hagan clic, hace esto"
    botonVerProductos.addEventListener("click", function () {

        // Hace scroll suave hasta la seccion productos
        seccionProductos.scrollIntoView({
            behavior: "smooth"
        });

    });
    // ============================================
    // FUNCIONALIDAD 2: Navegacion suave del menu
    // ============================================

    // Agarramos TODOS los links del menu de navegacion
    const linksMenu = document.querySelectorAll("nav a");

    // Recorremos cada link y le agregamos el evento click
    linksMenu.forEach(function (link) {

        link.addEventListener("click", function (evento) {

            // Cancelamos el comportamiento por defecto del navegador
            // (que es saltar de golpe)
            evento.preventDefault();

            // Sacamos del link a donde apunta (ej: "#productos")
            const destino = link.getAttribute("href");

            // Buscamos la seccion correspondiente
            const seccion = document.querySelector(destino);

            // Hacemos scroll suave hasta esa seccion
            seccion.scrollIntoView({
                behavior: "smooth"
            });

        });
    });

    // ============================================
    // FUNCIONALIDAD 3: Validacion del formulario
    // ============================================

    // Agarramos el formulario
    const formulario = document.querySelector("#contacto form");

    // Le decimos al formulario: "cuando alguien intente enviarte, hace esto"
    formulario.addEventListener("submit", function (evento) {

        // Cancelamos el envio por defecto (que recargaria la pagina)
        evento.preventDefault();

        // Agarramos los valores de cada campo
        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensaje = document.querySelector("#mensaje").value.trim();

        // Validacion 1: que ningun campo este vacio
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor completa todos los campos antes de enviar.");
            return;
        }

        // Validacion 2: que el email tenga formato valido
        // (que contenga @ y un punto despues)
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            alert("Por favor ingresa un email valido.");
            return;
        }

        // Si llegamos aca, todo esta bien
        // Mostramos mensaje de exito y limpiamos el formulario
        alert("Gracias " + nombre + ", recibimos tu mensaje. Te respondemos a la brevedad!");
        formulario.reset();

    });


});
