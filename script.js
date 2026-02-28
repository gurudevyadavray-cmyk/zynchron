// script.js

// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        this.items.push(product);
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    checkout() {
        // Implementation of checkout process
    }
}

// Example product and usage
const cart = new ShoppingCart();

// Adding products
cart.addProduct({id: 1, name: 'Product 1', price: 10, quantity: 1});
cart.addProduct({id: 2, name: 'Product 2', price: 15, quantity: 2});

// Removing a product
cart.removeProduct(1);

// Calculating total
const total = cart.calculateTotal();
console.log(`Total Amount: $${total}`);

// Checkout
// cart.checkout();
