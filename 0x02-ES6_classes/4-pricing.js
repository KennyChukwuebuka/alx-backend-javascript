/*eslint-disable*/
import Currency from './3-currency';

class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // Getter and setter for 'amount'
    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    // Getter and setter for 'currency'
    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (value instanceof Currency) {
            this._currency = value;
        } else {
            throw new Error('Currency must be an instance of the Currency class');
        }
    }

    // Method to display full price
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}

export default Pricing;

