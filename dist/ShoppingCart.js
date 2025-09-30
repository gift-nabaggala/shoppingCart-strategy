export class ShoppingCart {
    constructor() {
        this.total = 0;
    }
    addItem(price) {
        this.total += price;
    }
    checkout(strategy) {
        // delegate payment to the chosen strategy
        strategy.pay(this.total);
    }
}
//# sourceMappingURL=ShoppingCart.js.map