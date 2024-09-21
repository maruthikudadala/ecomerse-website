let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    document.getElementById('total').textContent = `Total: $${total}`;
}

function checkout() {
    alert('Thank you for your purchase!');
    cartItems = [];
    renderCart();
}
