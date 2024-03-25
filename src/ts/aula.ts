// class User {
//   _name: string;
//   private _balance: number = 0;

//   constructor(name: string, balance: number) {
//     this._name = name;
//     this._balance = balance;
//   }

//   depositMoney(amount: number): number {
//     return this._balance += amount;
//   }

//   withdrawMoney(amount: number): number {
//     return this._balance -= amount;
//   }

//   public get balance() : number {
//     return this._balance;
//   }

// }

// const user = new User('John', 10);
// user.depositMoney(100);
// user.withdrawMoney(50);
// console.log(user.balance);

// interface Person {
//   name: string;
//   age: number;

//   message(text: string): void;
// }

// // interface Student extends Person {
// //   grade: number;
// //   course: string;
// // }

// // let person: Student;
// // person = {
// //   name: 'John',
// //   age: 30,
// //   grade: 10,
// //   course: 'Math',
// //   message: function(text: string) {
// //     console.log(`${text}, ${this.name} is ${this.age} years. ${this.course} e ${this.grade}`);
// //   }
// // };

// // person.message('Hello man');

// // Day 5 - Exercise 1
// interface Item {
//   id: number;
//   title: string;
//   variantId?: number;
// }

// function addToCart(item: Item): void {
//   console.log(`Added "${item.title}" to cart`);
// }

// addToCart({id: 1, title: 'shoes'});

// // Day 5 - Exercise 2
// interface Person {
//   name: string;
//   age: number;
//   message(): string;
// }

// interface Student extends Person {
//   grade?: number;
//   course?: string;
// }

// class StudentPerson implements Student {
//   constructor(name: string, age: number, grade?: number, course?: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//     this.course = course;
//   }

//   name: string;
//   age: number;
//   grade?: number;
//   course?: string;

//   message(): string {
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// const person = new StudentPerson('John', 30);
// console.log(person.message());

// // Day 5 - Exercise 3
// class MC {
//   greet(event: string = 'party'): string {
//     return `Welcome to the ${event}`;
//   }
// }

// const mc = new MC();
// console.log(mc.greet('show'));

// // Day 5 - Exercise 4
// class Employee {
//   constructor( public title: string, public salary: number ) {  }
// }

// const employee = new Employee('Software Engineer', 100000);
// console.log('The employee earns', employee.salary, 'and is a', employee.title);

// Day 5 - Exercise 5

// interface UserSchema {
//   id: number
//   name: string
// }

// class User implements UserSchema {
//   constructor(public name: string, readonly id: number) {}
// }

// const user = new User('Dog', 1)

// console.log(user.id)

// user.name = 'Harold' // pode mudar

// console.log(`User:`, user)

// class HotelRooms {
//   [roomNumber: string]: string;
// }

// let room = new HotelRooms();

// room.a101 = 'single';
// room.a102 = 'double';
// room.a103 ='suite';
// console.log(room);

// class Person {
//   constructor(public firstName: string, public lastName: string, public age: number) {}

//   message(): void {
//     console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
//   }
// }

// class Client extends Person {
//   constructor(firstName: string, lastName: string, age: number, public id: number) {
//     super(firstName, lastName, age);
//   }

//   consult(): void {
//     console.log(`Consulting client id: ${this.id}`);
//   }
// }

// const client = new Client('John', 'Doe', 30, 1);
// client.consult();
// client.message();

// Day 7 - Exercise 1

// interface User {
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   name: string;
//   age: number;
//   role: string;
// }

// type Person = User | Admin;

// const persons: Person[] = [
//   {
//       name: 'Max Mustermann',
//       age: 25,
//       occupation: 'Chimney sweep'
//   },
//   {
//       name: 'Jane Doe',
//       age: 32,
//       role: 'Administrator'
//   },
//   {
//       name: 'Kate Müller',
//       age: 23,
//       occupation: 'Astronaut.'
//   },
//   {
//       name: 'Bruce Willis',
//       age: 64,
//       role: 'World saver.'
//   }
// ];

// function logPerson(person: Person) {
//   let additionalInformation: string;
//   if ('role' in person) {
//       additionalInformation = person.role;
//   } else {
//       additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// persons.forEach(logPerson);

// Day 7 - Exercise 2

// class Animal {
//   constructor(public name: string) {}
//   move(meters: number) {
//     console.log(`${this.name} moved ${meters}m.`)
//   }
// }

// class Snake extends Animal {
//   move(meters: number = 5) {
//     console.log('Slithering...')
//     super.move(meters)
//   }
// }

// class Pony extends Animal {
//   move(meters: number) {
//     console.log('Galloping...')
//     super.move(meters)
//   }
// }

// const sammy = new Snake("Sammy the Snake")
// sammy.move()

// const pokey = new Pony("Pokey the Pony")
// pokey.move(34)

// Day 7 - Exercise 3

// class Furniture {
//   constructor(protected manufacturer: string = 'IKEA') {}
// }

// class Desk extends Furniture {
//   kind() {
//     console.log(`This is a desk made by ${this.manufacturer}`)
//   }
// }

// class Chair extends Furniture {
//   kind() {
//     console.log(`This is a chair made by ${this.manufacturer}`)
//   }
// }

// const desk = new Desk()
// desk.kind()
// // desk.manufacturer // Deve retornar um erro

// const chair = new Chair()
// chair.kind()
// // chair.manufacturer // Deve retornar um erro

// class Person {
//   constructor(public firstName: string, public lastName: string, public age: number) {}
//   get greet(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// class Client extends Person {
//   override get greet(): string {
//     return `Client, ${super.greet}`;
//   }
// }

// class Staff extends Person {
//   override get greet(): string {
//     return `Staff, ${super.greet}`;
//   }
// }

// const client = new Client('John', 'Doe', 30);
// const staff = new Staff('Jane', 'Doe', 25);
// console.log(client.greet);
// console.log(staff.greet);

// abstract class Polygon {
//   public abstract getArea(): number;

//   public toString(): string {
//     return `Polygon[area=${this.getArea()}]`;
//   }
// }

// class Rectangle extends Polygon {
//   public constructor(protected readonly width: number, protected readonly height: number) {
//     super();
//   }

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// const myRect = new Rectangle(10,20);

// console.log(myRect.toString());

// class NamedValue<T> {
//   private _value: T | undefined;

//   constructor( private name: string) {}

//   public setValue(value: T) {
//     this._value = value;
//   }

//   public getValue(): T | undefined {
//     return this._value;
//   }

//   public toString(): string {
//     return `${this.name}: ${this._value}`;
//   }
// }

// let value = new NamedValue<number>('myNumber');
// value.setValue(10);
// console.log(value.toString()); // myNumber: 10

// function sum<S, T>(x: S, y: T): number[] {

//   const z = Number(x) + Number(y);
//   return [z];
// }
// const s1 = sum<number, number>(10, 20);
// console.log(s1);

// interface Point {
//   x: number;
//   y: number;
// }
// let pointPart: Required<Point> = {
//   x: 30,
//   y: 70
// };

// const nameAgeMap: Record<string, number> = {
//   John: 30,
//   Jane: 25
// }

// console.log(pointPart);
// console.log(nameAgeMap);

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500,
};

printYardSize(home); // Prints 'No yard'
