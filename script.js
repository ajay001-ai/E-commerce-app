const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Mobile", price: 20000, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Headphones", price: 3000, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Watch", price: 2500, image: "https://via.placeholder.com/200" }
];

let cart = [];

function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("total");

    cartItems.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price;
        cartItems.innerHTML += `
            <li>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </li>
        `;
    });

    cartCount.textContent = cart.length;
    total.textContent = sum;
}

loadProducts();