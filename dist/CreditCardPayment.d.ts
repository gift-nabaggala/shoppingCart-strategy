import type { PaymentStrategy } from "./PaymentStrategy.js";
export declare class CreditCardPayment implements PaymentStrategy {
    private cardNumber;
    constructor(cardNumber: string);
    pay(amount: number): void;
}
//# sourceMappingURL=CreditCardPayment.d.ts.map