export let cart;

loadFromStorage();

export function loadFromStorage()   {
    cart = JSON.parse(localStorage.getItem('cart'));

    if(!cart)   {
        cart = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }, {
            productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
            quantity: 1,
            deliveryOptionId: '2'
        }];
    }
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId)    {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId)
            matchingItem = cartItem;
    });

    if(matchingItem)    matchingItem.quantity++;
    else    {    
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();
}


export function removeFromCart(productId)  {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId)    {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId)  {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId)
            matchingItem = cartItem;
    });


    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}



export let products = [];

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}