// Función para calcular el tiempo restante hasta la fecha final
function countdown(eventDate) {
    const currentDate = new Date();

    const difference = eventDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Actualiza el contador cada segundo
let countdownInterval;

// Maneja el envío del formulario
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const nombre = formData.get("nombre");
    // Aquí podrías realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    alert(`Gracias, ${nombre}! Tu asistencia ha sido confirmada.`);

    // Calcula la fecha final (27 de julio de 2024)
    const endDate = new Date("2024-04-27T00:00:00");
    // Comienza el cronómetro desde la fecha de confirmación hasta la fecha final
    countdown(endDate);

    // Actualiza el contador cada segundo
    countdownInterval = setInterval(function() {
        countdown(endDate);
    }, 1000);
});

    // Función para ajustar el radio de borde del contenedor dependiendo de su tamaño
    function adjustBorderRadius() {
        const container = document.getElementById("container");
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const maxContainerSize = Math.max(containerWidth, containerHeight);
        const borderRadius = maxContainerSize * 0.06; // Porcentaje del tamaño del contenedor

        container.style.borderRadius = borderRadius + "px";
    }

    // Llama a la función para ajustar el radio de borde cuando la ventana cambie de tamaño
    window.addEventListener("resize", adjustBorderRadius);

    // Llama a la función inicialmente para ajustar el radio de borde cuando se carga la página
    window.onload = adjustBorderRadius;



// Maneja el envío del formulario
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const nombre = formData.get("nombre");
    const apellido = formData.get("apellidos");
    // Aquí podrías realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    alert(`Gracias, ${nombre} ${apellido}! Tu asistencia ha sido confirmada.`);
    
    // Limpia los campos de nombre y apellido
    document.getElementById("nombre").value = '';
    document.getElementById("apellidos").value = '';
});
