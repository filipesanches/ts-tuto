"use strict";
const imc = () => {
    const dados = () => {
        const nome = String(prompt('Qual o seu nome?'));
        const idade = Number(prompt('Qual sua idade?'));
        const peso = Number(prompt('Qual seu peso?'));
        const altura = Number(prompt('Qual sua altura?'));
        return { nome, idade, peso, altura };
    };
    const imcCalculador = (pessoa) => pessoa.peso / pessoa.altura ** 2;
    const init = () => {
        const { nome, idade, peso, altura } = dados();
        const imc = imcCalculador({ nome, idade, peso, altura });
        const texto = `Olá ${nome}, sua idade é ${idade} anos, seu peso é ${peso} e sua altura é ${altura}! Seu IMC é ${imc.toFixed(2)}`;
        return texto;
    };
    return { init };
};
const pessoa1 = imc();
console.log(pessoa1.init());