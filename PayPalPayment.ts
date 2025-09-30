import type { PaymentStrategy } from "./PaymentStrategy.js";

export class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}
  pay(amount: number): void {
    console.log(`Charging $${amount} to PayPal account ${this.email}`);
  }
}
