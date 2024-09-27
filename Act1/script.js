document.querySelector("form").addEventListener("submit", function(e) {
    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Por favor ingrese un correo electrónico válido.");
        e.preventDefault();
    }
});