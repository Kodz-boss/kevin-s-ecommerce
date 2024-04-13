// Function to save cart items to localStorage
function saveCartToLocalStorage() {
    var cartItems = document.querySelectorAll(".cart-item");
    var cartItemsData = [];

    cartItems.forEach(cartItem => {
        var itemName = cartItem.querySelector(".item-name").textContent;
        var itemPrice = cartItem.querySelector(".item-price").textContent;
        var itemQuantity = cartItem.querySelector(".item-quantity").textContent;
        cartItemsData.push({ name: itemName, price: itemPrice, quantity: itemQuantity });
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
}

// Function to load cart items from localStorage
function loadCartFromLocalStorage() {
    var cartItemsData = JSON.parse(localStorage.getItem("cartItems"));
    var cartingDiv = document.querySelector(".carting");

    if (cartItemsData) {
        cartItemsData.forEach(itemData => {
            var cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p class="item-name">${itemData.name}</p>
                <p class="item-price">${itemData.price}</p>
                <div class="increhol">
                <button class="increment-button">+</button>
                <div class="item-quantity">${itemData.quantity}</div>
                <button class="decrement-button">-</button>
                </div>
                <button class="remove-button">Remove</button>
            `;
            cartingDiv.appendChild(cartItem);
        });
    }
}

// Load cart items from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
});

// Select all "Add To Cart" buttons
var addToCartButtons = document.querySelectorAll(".addtocart");

// Add event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        var itemName = button.closest(".swiper-slide").querySelector(".name").innerText;
        var itemPrice = button.closest(".swiper-slide").querySelector(".tag").innerText;

        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p class="item-name">${itemName}</p>
            <p class="item-price">${itemPrice}</p>
            <div class="increhol">
            <button class="increment-button">+</button>
            <div class="item-quantity">1</div>
            <button class="decrement-button">-</button>
            </div>
            <button class="remove-button">Remove</button>
        `;

        var cartingDiv = document.querySelector(".carting");
        cartingDiv.appendChild(cartItem);

        saveCartToLocalStorage();
    });
});

// Delegate increment button click event to the parent container
var cartingDiv = document.querySelector(".carting");
cartingDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("increment-button")) {
        var quantityElement = event.target.parentElement.querySelector(".item-quantity");
        var currentQuantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = currentQuantity + 1;
        saveCartToLocalStorage();
    }
});

// Delegate decrement button click event to the parent container
cartingDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("decrement-button")) {
        var quantityElement = event.target.parentElement.querySelector(".item-quantity");
        var currentQuantity = parseInt(quantityElement.innerText);
        if (currentQuantity > 1) {
            quantityElement.innerText = currentQuantity - 1;
            saveCartToLocalStorage();
        }
    }
});

// Delegate remove button click event to the parent container
cartingDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        var cartItem = event.target.closest(".cart-item");
        cartItem.remove();
        saveCartToLocalStorage();
    }
});

// Calculate and display total price
function calculateTotal() {
    var cartItems = document.querySelectorAll(".cart-item");
    var total = 0;

    cartItems.forEach(cartItem => {
        var itemPrice = parseFloat(cartItem.querySelector(".item-price").textContent);
        var itemQuantity = parseInt(cartItem.querySelector(".item-quantity").textContent);
        total += itemPrice * itemQuantity;
    });

    var totalPriceElement = document.createElement("p");
    totalPriceElement.classList.add("total-price");
    totalPriceElement.textContent = "TOTAL = $" + total.toFixed(2);

    // Remove any existing total price element
    var existingTotalPriceElement = document.querySelector(".total-price");
    if (existingTotalPriceElement) {
        existingTotalPriceElement.remove();
    }

    // Add the new total price element to the cart
    cartingDiv.appendChild(totalPriceElement);

    saveCartToLocalStorage();
}

// Call the function when the page loads and when the cart is updated
document.addEventListener("DOMContentLoaded", calculateTotal);
cartingDiv.addEventListener("click", calculateTotal);

// Toggle cart visibility when cart icon is clicked
var icon = document.querySelector(".carticon");
var cart = document.querySelector(".carting");
var iconn = document.querySelector("#iconnn");
var hamb = document.querySelector(".hamb");
var menu = document.querySelector(".menu");
var iconnn = document.querySelector("#iconn");
var shop = document.querySelector(".shop");
var shopmenu = document.querySelector(".shopmenu");
var cancelshop = document.querySelector("#iconnnn")

icon.addEventListener("click", () => {
    cart.classList.add("active");
});

iconn.addEventListener("click", () =>{
    cart.classList.remove("active");
});

hamb.addEventListener("click", () =>{
    cart.classList.remove("active");
})

hamb.addEventListener("click", () =>{
    menu.classList.add("active1");
})

iconnn.addEventListener("click", () =>{
    menu.classList.remove("active1");
})

icon.addEventListener("click", () =>{
    menu.classList.remove("active1");
})

shop.addEventListener("click", () =>{
    shopmenu.classList.add("active2");
})

cancelshop.addEventListener("click", () =>{
    shopmenu.classList.remove("active2");
})

icon.addEventListener("click", () =>{
    shopmenu.classList.remove("active2");
})

cancelshop.addEventListener("click", () =>{
    menu.classList.remove("active2");
})

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'index.html';
});

document.querySelector('#registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'login.html'; // Redirect to login.html
});

window.__lc = window.__lc || {};
    window.__lc.license = 17583351;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))