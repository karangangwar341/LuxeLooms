var cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [];
}
export { cart };
var htms = '';
var total = 0;
window.addEventListener('DOMContentLoaded', (event) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(cartelement => {
        total += cartelement.price * cartelement.quantity;
        var htm = `
        <div class="border-2 rounded-xl mb-6 p-4  ml-16 mr-16 bg-orange-200/40 shadow-xl">
            <div class="flex justify-between items-center ">
                <img src="${cartelement.image}" alt="Product Image" class="w-48 shadow-md shadow-black/40 hover:scale-125 transition-transform rounded-2xl object-cover">
                <div>
                    <h3 class="font-semibold text-lg mb-2">${cartelement.name}</h3>
                    <p class="text-sm">Quantity: ${cartelement.quantity}</p>
                    <button data-item-name="${cartelement.name}" class="removeitem bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mt-2">Remove</button>
      
                </div>
                <p class="font-bold text-lg">$${cartelement.price}</p>
            </div>
            </div>
        `;
        htms += htm;
    });
    

    document.getElementById('cartitems').innerHTML = htms;
    console.log("hiohiohio");
    document.getElementById('totalbill').innerHTML = `$${total}`;
    console.log("hiohiohio");
    const removeButtons = document.querySelectorAll('.removeitem');
    console.log("hiohiohio");
    removeButtons.forEach((button) => {
      console.log("hiohiohio");
        button.addEventListener('click', () => {
            const itemName = button.dataset.itemName;
            const index = cart.findIndex(item => item.name === itemName);
            console.log("hiohiohio");
            if (index !== -1) {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.reload();
                console.log(cart);
            }
        });
    });
});
