let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let product = [
    {
        id: 1,
        name: 'PRODUCT 1',
        price: 1000,
        image: 'car1.jpg'
    },
    {
        id: 2,
        name: 'PRODUCT 2',
        price: 2000,
        image: 'car2.jpg'
    },
    {
        id: 3,
        name: 'PRODUCT 3',
        price: 3000,
        image: 'car3.jpg'
    },
    {
        id: 4,
        name: 'PRODUCT 4',
        price: 4000,
        image: 'car3.jpg'
    },
    {
        id: 5,
        name: 'PRODUCT 5',
        price: 4000,
        image: 'car3.jpg'
    },
    {
        id: 6,
        name: 'PRODUCT 6',
        price: 4000,
        image: 'car3.jpg'
    },
];
let listCards = [];
function initApp(){
    product.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if(listCards[key] == null){
        listCards[key] = product[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = ''
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity  - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity  + 1})">+</button>
            </div>
            `;
        }
})
    total.innerHTML = `Total: ${totalPrice.toLocaleString()}`;
    quantity.innerHTML = count;
}