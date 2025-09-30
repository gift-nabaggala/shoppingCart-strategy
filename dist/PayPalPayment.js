export class PayPalPayment {
    constructor(email) {
        this.email = email;
    }
    pay(amount) {
        console.log(`Charging $${amount} to PayPal account ${this.email}`);
    }
}
//# sourceMappingURL=PayPalPayment.js.map