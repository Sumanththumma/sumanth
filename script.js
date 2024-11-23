const shoppingCart = {      
    items: [
        {name: "Samsung Phone", price: 85000, quantity: 1},
        {name: "Apple Watch", price: 25000, quantity: 2},
        {name: "Sony Headphones", price: 15000, quantity: 3}
    ],
    addItem: function(item){
        this.items.push(item);
    },
    removeItem: function(item){
        const index = this.items.findIndex(i => i.name === item.name);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    },
    getTotalPrice: function(){
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    showCart: function(){
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(`${item.name} - ${item.price} - Quantity: ${item.quantity}`);
        });
    }
}
shoppingCart.addItem("Apple", 1.5, 3); // Add 3 apples at $1.5 each
shoppingCart.addItem("Banana", 1, 5); // Add 5 bananas at $1 each
shoppingCart.addItem("Apple", 1.5, 2); // Add 2 more apples
shoppingCart.showCart(); // Show the cart details
shoppingCart.removeItem("Banana"); // Remove bananas
shoppingCart.showCart(); // Show updated cart details
console.log("Total Price:", shoppingCart.getTotalPrice()); // Calculate total price
    