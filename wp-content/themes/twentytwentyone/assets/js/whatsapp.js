document.addEventListener("DOMContentLoaded", function() {
    var countryPrefix = "34"; // Reemplaza con el prefijo de tu país
    var phoneNumber = "623100086"; // Reemplaza con el número de teléfono
    var message = "Hola, tengo una consulta"; // Reemplaza con el mensaje predefinido
    var encodedMessage = encodeURIComponent(message);
    var whatsappLink = "https://wa.me/" + countryPrefix + phoneNumber + "?text=" + encodedMessage;

    document.getElementById("whatsappLink").setAttribute("href", whatsappLink);
});