import { products } from './index.js';
filter()
{
const filter=document.getElementById("search-filter");
let searchValue= string(filter.value);
console.log(searchValue);
var htms=``;
products.forEach(product => {
    if(element.name.includes(searchValue))
    {
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
    }
});
document.getElementById('products').innerHTML = htms;
}