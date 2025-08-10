// script.js
let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart!`);
    updateCart();
}
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}
function displayCart() {
    loadCart();
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item) => {
        cartContainer.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });
    cartContainer.innerHTML += `<h3>Total: $${total}</h3>`;
}
window.onload = loadCart;