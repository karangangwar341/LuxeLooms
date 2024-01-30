import { cart } from './cart.js';
var products = [
    {
        image: 'public/image 1.png',
        category: 'Bedroom',
        name: 'product name 1',
        description: 'This is a sofa set with 7 seats with reclining seats',
        price: 1900,
        quantity: 10
    },
    {
        image: 'public/image 2.png',
        category: 'Living Room',
        name: 'product name 2',
        description: 'A very comfortable sofa for the living room',
        price: 3500,
        quantity: 8
    },
    {
        image: 'public/image 3.png',
        category: 'Living Room',
        name: 'product name 3',
        description: 'A very comfortable sofa for the living room',
        price: 3500,
        quantity: 8
    }
];
export {products};
console.log(products);

var htms = '';
console.log("hi");
products.forEach(product => {
    console.log(product.name);
    console.log(product.image);
    console.log(product.price);
    var htm = `<div class="flex flex-wrap justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 m-3">
            
        <div class="bg-white rounded-lg shadow-md p-6 h-full text-center">
            <img class="w-full h-auto rounded-md mb-4" src="${product.image}" alt="Product Image">
            <div class="text-center">
                <h2 class="text-lg font-semibold mb-2">${product.name}</h2>
                <p>${product.description}</p>
                <p class="text-gray-600"> Price $${product.price / 100}</p>
            </div>
            <button id="addtocartbutton" data-product-name="${product.name}" data-product-image="${product.image}" data-product-price="${product.price}"
         class=" addtocartbutton border-2 w-full border-yellow-700/80 bg-orange-200/50 hover:scale-110 focus:scale-95 focus:bg-orange-700/60 transition-transform focus:shadow-xl rounded-xl m-2 py-1 px-2 ">Add to cart</button>        
        </div>
    </div>`;
    console.log('product displayed')
    htms = htms + htm;
});

document.getElementById('products').innerHTML = htms;

window.addEventListener('DOMContentLoaded', (event) =>
 {
    const button = document.querySelectorAll('.addtocartbutton');
    button.forEach((btn) => {
        btn.addEventListener('click', () => {
            var productName = btn.dataset.productName;
            //console.log("Adding " + productName);
            var productImage = btn.dataset.productImage;
            var productPrice = btn.dataset.productPrice;
            var k = 0;
            cart.forEach(element => {
                if (element.name === productName) {
                    element.quantity = Number(element.quantity) + 1;
                    k = 1;
                    localStorage.setItem('cart',JSON.stringify(cart));
                }
            });
            if(k === 0) {
                cart.push({
                    image: productImage,
                    name: productName,
                    quantity: 1,
                    price: productPrice
                });
            }
            console.log("Cart:", cart);
            alert("Item added to your shopping cart");
            localStorage.setItem('cart',JSON.stringify(cart));
        });
    });
});
const shopButtons = document.querySelectorAll(".shop-button");
shopButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hi");
        window.location.href = 'shop.html';
    });
});

const cartButtons = document.querySelectorAll(".cart-button");
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hi");
        window.location.href = 'cart.html';
    });
});

const homeButtons = document.querySelectorAll('.home-button');
homeButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hi");
        window.location.href = 'index.html';
    });
});


