interface Pessoa {
  nome: string;
  idade: number;
  peso: number;
  altura: number;
}

const imc = (): { init: () => string } => {
  const dados = (): Pessoa => {
    const nome = String(prompt('Qual o seu nome?'));
    const idade = Number(prompt('Qual sua idade?'));
    const peso = Number(prompt('Qual seu peso?'));
    const altura = Number(prompt('Qual sua altura?'));
    return { nome, idade, peso, altura };
  };

  const imcCalculador = (pessoa: Pessoa): number => pessoa.peso / pessoa.altura ** 2;

  const init = (): string => {
    const { nome, idade, peso, altura } = dados();
    const imc = imcCalculador({ nome, idade, peso, altura });
    const texto = `Olá ${nome}, sua idade é ${idade} anos, seu peso é ${peso} e sua altura é ${altura}! Seu IMC é ${imc.toFixed(2)}`;
    return texto;
  };

  return { init };
};

const pessoa1 = imc();
// console.log(pessoa1.init());

const nmr: number = 1;
const y: string = nmr as unknown as string;
console.log(y);

function sum(a: string | number, b: string | number): number | string {
  let sum: string | number = 0;
  if (typeof a === 'string' && typeof b === 'string') sum = `${a.toString()}${b.toString()}`;
  if (typeof a === 'number' && typeof b === 'string') sum = `${a.toString()}${b.toString()}`;
  if (typeof a === 'string' && typeof b === 'number') sum = `${a.toString()}${b.toString()}`;
  if (typeof a === 'number' && typeof b === 'number') sum = a + b;
  return sum;
}

const su = sum(1, 'sss');
console.log(su);

// Day 3 - Exercise 1

let pi = '3.14159';
let tau = Number(pi) * 2;

console.log(`${tau} is ${pi} times two.`);

// Day 3 - Exercise 2

let pie: string;
pie = 'blueberry';

console.log(`I like to eat ${pie}-flavored pie.`);

// Day 3 - Exercise 3

let isFilipe: boolean = 0 == 0;

console.log(`${isFilipe ? 'Oh, hi Filipe!' : 'Who are you?'}`);

// Day 3 - Exercise 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [integer, float, hex, binary, octal, negZero, actuallyNumber, largestNumber, mostBiglyNumber];

let teste144: number = 25;
members[0] = Number('12345');

console.log(members);

// Day 3 - Exercise 5
const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const stringAndNumbers: (string | number)[] = ['one', 1, 'two', 2, 'three', 3];
const allArrays: (number | string)[][] = [sequence, animals, stringAndNumbers];
console.log(allArrays);
negZero;

// teste
