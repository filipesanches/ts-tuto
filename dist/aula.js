"use strict";
class User {
    constructor(name, balance) {
        this._name = name;
        this._balance = balance;
    }
    depositMoney(amount) {
        return this._balance += amount;
    }
    withdrawMoney(amount) {
        return this._balance -= amount;
    }
    get balance() {
        return this._balance;
    }
}
const user = new User('John', 10);
user.depositMoney(100);
user.withdrawMoney(50);
