import * as readline from "readline";
import { ShoppingCart } from "./ShoppingCart.js";
import { CreditCardPayment } from "./CreditCardPayment.js";
import { PayPalPayment } from "./PayPalPayment.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cart = new ShoppingCart();

function showMenu() {
  console.log("\n--- 🛒 Shopping Cart ---");
  console.log("1. Add item worth $10");
  console.log("2. Add item worth $20");
  console.log("3. Checkout");
  console.log("4. Exit");
  console.log("------------------------");
  console.log("Current total: $" + cart.addItem);
}

function ask() {
  showMenu();
  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        cart.addItem(10);
        console.log("✅ Added item: $10");
        break;
      case "2":
        cart.addItem(20);
        console.log("✅ Added item: $20");
        break;
      case "3":
        choosePayment();
        return; // stop here and go to payment
      case "4":
        console.log("👋 Goodbye!");
        rl.close();
        return;
      default:
        console.log("❌ Invalid option, try again.");
    }
    ask(); // ask again
  });
}

function choosePayment() {
  console.log("\n--- 💰 Choose Payment Method ---");
  console.log("1. Credit Card");
  console.log("2. PayPal");

  rl.question("Select payment method: ", (method) => {
    switch (method) {
      case "1":
        rl.question("Enter card number: ", (num) => {
          cart.checkout(new CreditCardPayment(num));
          rl.close();
        });
        break;
      case "2":
        rl.question("Enter PayPal email: ", (email) => {
          cart.checkout(new PayPalPayment(email));
          rl.close();
        });
        break;
      default:
        console.log("❌ Invalid method.");
        rl.close();
    }
  });
}

console.log("👋 Welcome to the CLI Shopping Cart!");
ask();
