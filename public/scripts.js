// Initialiser EmailJS avec ta clé publique
(function() {
    emailjs.init("auyJPRNXFmAdwbmi9");
})();

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi traditionnel du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone= document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Envoi du message via EmailJS
    emailjs.send("service_mszkmfd", "template_gb1m5wo", {
        from_name: name,
        from_email: email,
        from_phone: phone,
        message: message
    })
    .then(function(response) {
        document.getElementById('responseMessage').innerText = "Merci, votre message a été envoyé avec succès !";
        document.getElementById('messageForm').reset();
    }, function(error) {
        document.getElementById('responseMessage').innerText = "Erreur lors de l'envoi : " + JSON.stringify(error);
    });
});