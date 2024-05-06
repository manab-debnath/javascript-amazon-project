import { renderOrderSummary } from './checkOut/orderSummary.js';
import { renderPaymentSummary } from './checkOut/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts } from '../data/products.js';




loadProducts(() => {
      renderOrderSummary();
      renderPaymentSummary();
});