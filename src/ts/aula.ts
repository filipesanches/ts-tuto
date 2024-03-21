class User {
  _name: string;
  private _balance: number;

  constructor(name: string, balance: number) {
    this._name = name;
    this._balance = balance;
  }

  depositMoney(amount: number): number {
    return this._balance += amount;
  }

  withdrawMoney(amount: number): number {
    return this._balance -= amount;
  }
  
  
  public get balance() : number {
    return this._balance;
  }
  
}

const user = new User('John', 10);
user.depositMoney(100);
user.withdrawMoney(50);

const nome: string = 'hvar';