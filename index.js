import { cart } from './cart.js';
var products = [
    {
        id: 100,
        image: 'public/image 1.png',
        category: 'Bedroom',
        name: 'Sofa Set with Reclining Seats',
        description: 'A comfortable sofa set with 7 seats, featuring reclining seats for added relaxation.',
        description2: 'This sofa set is upholstered in premium fabric, providing a luxurious feel. The reclining seats offer customizable comfort, making it perfect for lounging and entertaining guests.',
        price: 1900,
        quantity: 10
    },
    {
        id: 101,
        image: 'public/image 2.png',
        category: 'Living Room',
        name: 'Comfortable Living Room Sofa',
        description: 'A cozy and stylish sofa designed for the living room.',
        description2: 'With its modern design and plush cushions, this sofa adds a touch of elegance to any living room. The durable construction ensures long-lasting comfort for you and your family.',
        price: 3500,
        quantity: 8
    },
    {
        id: 102,
        image: 'public/image 3.png',
        category: 'Living Room',
        name: 'Modern Living Room Sofa',
        description: 'A sleek and comfortable sofa designed for modern living rooms.',
        description2: 'This modern sofa features clean lines and a minimalist design, making it the focal point of any contemporary living space. The high-quality materials used ensure both style and durability.',
        price: 3500,
        quantity: 8
    },
    {
        id: 103,
        image: 'public/image 4.png',
        category: 'Kitchen',
        name: 'Stylish Kitchen Table',
        description: 'A stylish kitchen table with a wooden finish, perfect for family gatherings.',
        description2: 'Crafted with solid wood, this kitchen table combines style and functionality. The spacious surface allows for comfortable dining, while the wooden finish adds warmth to your kitchen decor.',
        price: 1200,
        quantity: 15
    },
    {
        id: 104,
        image: 'public/image 5.png',
        category: 'Bathroom',
        name: 'Modern Shower System',
        description: 'A modern shower system with adjustable settings for an enhanced shower experience.',
        description2: 'Upgrade your daily routine with this modern shower system. The adjustable settings cater to your preferences, and the sleek design adds a contemporary touch to your bathroom.',
        price: 800,
        quantity: 20
    },
    {
        id: 105,
        image: 'public/image 6.png',
        category: 'Office',
        name: 'Ergonomic Office Chair',
        description: 'An ergonomic office chair designed for long hours of work, with adjustable features for maximum comfort.',
        description2: 'This ergonomic office chair prioritizes your comfort during extended work hours. The adjustable features, including lumbar support and armrests, ensure a customized seating experience for optimal productivity.',
        price: 250,
        quantity: 25
    },
    {
        id: 106,
        image: 'public/image 7.png',
        category: 'Bedroom',
        name: 'King-sized Bed with Storage Drawers',
        description: 'A luxurious king-sized bed with built-in storage drawers for added convenience.',
        description2: 'Transform your bedroom into a haven of luxury with this king-sized bed. The built-in storage drawers provide ample space for organizing your essentials, combining style with functionality.',
        price: 1800,
        quantity: 12
    },
    {
        id: 107,
        image: 'public/image 8.png',
        category: 'Living Room',
        name: 'Leather Recliner with Cup Holders',
        description: 'A leather recliner designed for ultimate relaxation during movie nights, featuring built-in cup holders.',
        description2: 'Indulge in comfort with this leather recliner. The plush cushions and built-in cup holders create the perfect environment for movie nights and relaxation after a long day.',
        price: 1200,
        quantity: 10
    },
    {
        id: 108,
        image: 'public/image 9.png',
        category: 'Outdoor',
        name: 'Durable Outdoor Dining Set',
        description: 'A durable outdoor dining set designed for patios or gardens, featuring weather-resistant material for long-lasting use.',
        description2: 'Enhance your outdoor gatherings with this durable dining set. The weather-resistant material ensures longevity, and the stylish design adds a touch of elegance to your outdoor space.',
        price: 1600,
        quantity: 18
    },
    {
        id: 109,
        image: 'public/image 10.png',
        category: 'Kids Room',
        name: 'Colorful Bunk Beds',
        description: 'Colorful bunk beds designed for kids\' rooms, featuring a space-saving design with playful aesthetics.',
        description2: 'Make bedtime fun with these colorful bunk beds. The space-saving design is perfect for kids rooms, and the playful aesthetics add a touch of whimsy to their living space.',
        price: 900,
        quantity: 15
    }
];

export {products};
console.log(products);

var htms = '';
console.log("hi");
var shuffledProducts = products.sort(() => 0.5 - Math.random());
var selectedProducts = shuffledProducts.slice(0, 5);
selectedProducts.forEach(product => {
    var htm = `<div class="flex flex-wrap justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 m-3">
            
        <div class="bg-white rounded-lg shadow-md p-6 h-full text-center">
           <a href="product.html"><img class="w-full h-4/6 rounded-md mb-4" src="${product.image}" alt="Product Image"></a>
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


