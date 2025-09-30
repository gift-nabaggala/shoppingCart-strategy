import type { PaymentStrategy } from "./PaymentStrategy.js";
export declare class PayPalPayment implements PaymentStrategy {
    private email;
    constructor(email: string);
    pay(amount: number): void;
}
//# sourceMappingURL=PayPalPayment.d.ts.map