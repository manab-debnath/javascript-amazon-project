import { addToCart, cart, loadFromStorage } from "../../data/cart.js";



describe('test suite: addToCart', () => {
    it('adds and existing product to the cart', () => {
        
    });
    
    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem');                
        
        localStorage.clear();
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();
        localStorage.clear();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(2);
        // expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});