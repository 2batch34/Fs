let cart = [];
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
  // Clear the cart list
    cartList.innerHTML = "";
   // Populate the cart list
    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });
    // Update the total price
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}