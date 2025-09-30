import type { PaymentStrategy } from "./PaymentStrategy.js";

export class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Charging $${amount} to credit card ${this.cardNumber}`);
  }
}
