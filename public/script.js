let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; // Déplacement de 100% pour chaque slide
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


// Pour le panier
let cart = [];

        function addToCart(name, price) {
            const item = { name, price };
            cart.push(item);
            alert(`Vous avez ajouté ${name} au panier.`);
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const cartItemsList = document.getElementById('cart-items');
            cartItemsList.innerHTML = ''; // Clear current items

            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price} frs `;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Supprimer';
                removeButton.onclick = () => removeFromCart(index);
                li.appendChild(removeButton);
                cartItemsList.appendChild(li);
            });
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
        }

        function pay() {
            const paymentNumber = '774047642'; // Remplacez par votre numéro Wave ou Orange Money
            const paymentLink = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(paymentNumber)}`;

            // Afficher le QR code
            document.getElementById('qrcode').innerHTML = ''; // Clear previous QR code
            const qrcode = new QRCode(document.getElementById("qrcode"), {
                text: paymentNumber,
                width: 128,
                height: 128,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });

            document.getElementById('qr-code').style.display = 'block'; // Afficher le QR code
        }

        function closeQRCode() {
            document.getElementById('qr-code').style.display = 'none'; // Cacher le QR code
        }