var removeItems = document.querySelectorAll('.cart-remove')

for(var i=0;i<removeItems.length;i++){
    var button =  removeItems[i]
    button.addEventListener('click', remove)
}
var qtyInputs = document.querySelectorAll('.cart-qty-val')
for(var i=0; i<qtyInputs.length;i++){
    var input = qtyInputs[i]
    input.addEventListener('change', qtyChanged)
}
/*
var add_to_cart = document.querySelectorAll('#cart-add')
for(var i=0; i<add_to_cart.length;i++){
    var button = add_to_cart[i]
    button.addEventListener('click', addToCart)
}
*/

function updateCartTotal(){
    var cartItemContainer = document.querySelectorAll('.cart-items')[0]
    var cartRows = cartItemContainer.querySelectorAll('.cart-row')
    var total = 0;
    for(var i=0;i<cartRows.length;i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.querySelectorAll('.cart-price')[0]
        var qtyElement = cartRow.querySelectorAll('.cart-qty-val')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var qty = qtyElement.value
        total = total + (price * qty)
    }
    total = Math.round(total * 100)/100
    document.querySelectorAll('.cart-total-val')[0].innerText = '$' + total
    document.querySelector('.cart-subtotal').innerText = '$' + (total * 1.06)
}

function remove(){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    document.querySelector('.cart-subtotal').innerText = '$' + 0
    updateCartTotal();
}
function qtyChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}
function add_to_cart(event){
    var button = event.target
    
}