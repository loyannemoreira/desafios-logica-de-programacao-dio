/*
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

// Classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
    }
    
    console.log(`O herói ${this.nome} (${this.tipo}) atacou usando ${ataque}`);
  }
}

// Função para validar a entrada de tipo de herói
function validarTipoHeroi() {
  let tipo;
  while (true) {
    tipo = prompt('Digite o tipo de herói (mago, guerreiro, monge, ninja):').toLowerCase();
    if (['mago', 'guerreiro', 'monge', 'ninja'].includes(tipo)) {
      return tipo;
    }
    alert('Tipo de herói inválido. Escolha entre mago, guerreiro, monge ou ninja.');
  }
}

// Solicitar ao usuário criar heróis
const numeroDeHerois = parseInt(prompt('Quantos heróis deseja criar?'));
const herois = [];

for (let i = 0; i < numeroDeHerois; i++) {
  const nome = prompt('Digite o nome do herói:');
  const idade = parseInt(prompt('Digite a idade do herói:'));
  const tipo = validarTipoHeroi();

  const heroi = new Heroi(nome, idade, tipo);
  herois.push(heroi);
}

// Exibir mensagens de ataque para cada herói
for (const heroi of herois) {
  heroi.atacar();
}
