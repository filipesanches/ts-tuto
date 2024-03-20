type Pessoa = {
  nome: string;
  idade: number;
  peso: number;
  altura: number;
};

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
console.log(pessoa1.init());
