export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)   {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    }, {
        productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
        quantity: 4
    }];
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId)    {
    let matchingItem;
    cart.forEach((CartItem) => {
        if(productId === CartItem.productId)
            matchingItem = CartItem;
    });

    if(matchingItem)    matchingItem.quantity++;
    else    {    
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveToStorage();
}


export function removeFromCart(productId)  {
    const newCart = [];

    cart.forEach((CartItem) => {
        if(CartItem.productId !== productId)    {
            newCart.push(CartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}