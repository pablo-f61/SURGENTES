document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita recargar la página

        let formData = new FormData(this);

        fetch("https://formsubmit.co/surgentes1@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => response.ok ? "Mensaje enviado con éxito" : "Error al enviar el mensaje")
        .then(message => document.getElementById("status").textContent = message)
        .catch(error => document.getElementById("status").textContent = "Ocurrió un error");
    });
});