// Sample data for items in the cart
const cartItems = [
    { id: 1, name: "Item 1", price: 10, quantity: 1, liked: false },
    { id: 2, name: "Item 2", price: 15, quantity: 2, liked: true },
    { id: 3, name: "Item 3", price: 20, quantity: 3, liked: false }
  ];
  
  // Function to render the cart items
  function renderCart() {
    const itemList = document.getElementById("item-list");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;
  
    itemList.innerHTML = "";
  
    cartItems.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart-item");
  
      const itemInfo = document.createElement("div");
      itemInfo.classList.add("item-info");
      itemInfo.innerHTML = `
        <span>${item.name}</span>
        <span>Price: $${item.price}</span>
      `;
  
      const itemQuantity = document.createElement("div");
      itemQuantity.classList.add("item-quantity");
      itemQuantity.innerHTML = `
        <button onclick="decreaseQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity(${item.id})">+</button>
      `;
  
      const likeButton = document.createElement("button");
      likeButton.innerHTML = item.liked ? "❤️" : "♡";
      likeButton.classList.add(item.liked ? "liked" : "not-liked");
      likeButton.addEventListener("click", () => toggleLike(item.id));
  
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener("click", () => deleteItem(item.id));
  
      cartItem.appendChild(itemInfo);
      cartItem.appendChild(itemQuantity);
      cartItem.appendChild(likeButton);
      cartItem.appendChild(deleteButton);
      itemList.appendChild(cartItem);
  
      totalPrice += item.price * item.quantity;
    });
  
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
  }
  
  // Function to increase the quantity of an item
  function increaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      item.quantity++;
      renderCart();
    }
  }
  
  // Function to decrease the quantity of an item
  function decreaseQuantity(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      renderCart();
    }
  }
  
  // Function to toggle the liked state of an item
  function toggleLike(itemId) {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      item.liked = !item.liked;
      renderCart();
    }
  }
  
  // Function to delete an item from the cart
  function deleteItem(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      renderCart();
    }
  }
  
  // Render the initial cart
  renderCart();
  