import type { PaymentStrategy } from "./PaymentStrategy.js";

export class ShoppingCart {
  private total = 0;

  addItem(price: number) {
    this.total += price;
  }

  checkout(strategy: PaymentStrategy) {
    // delegate payment to the chosen strategy
    strategy.pay(this.total);
  }
}
