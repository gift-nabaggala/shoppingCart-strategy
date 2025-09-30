export class CreditCardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Charging $${amount} to credit card ${this.cardNumber}`);
    }
}
//# sourceMappingURL=CreditCardPayment.js.map