// Seleccionamos el formulario
const form = document.querySelector('#form');

// Agregamos un evento para cuando se envíe el formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Ahora capturamos el valor del input
    const nombreUsuario = document.querySelector('#name').value;
    console.log(nombreUsuario);
    window.location.href = 'g1.html'
});