/*
# 1️⃣ Desafio Classificador de nível de Herói
Proposto pelo Felipe Aguiar, na Formação Lógica de Programação, da DIO

**O Que deve ser utilizado**

1) Variáveis
2) Operadores
3) Laços de repetição
4) Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

// Função para calcular o nível do herói com base na XP
function calcularNivelDoHeroi(nome, xp) {
    if (xp < 1000) {
      return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      return "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      return "Imortal";
    } else {
      return "Radiante";
    }
  }
  
  // Entrada de dados para que o usuário forneça o nome do herói
  const nomeDoHeroi = prompt("Digite o nome do herói:");
  
  // Loop para garantir que o usuário forneça uma XP válida
  let xpDoHeroi;
  while (true) {
    xpDoHeroi = parseFloat(prompt("Digite a quantidade de experiência (XP) do herói:"));
    if (!isNaN(xpDoHeroi)) {
      break; // Sai do loop se a entrada for um número válido
    }
    alert("Por favor, digite um número válido para a XP do herói.");
  }
  
  // Chama a função para calcular o nível do herói
  const nivelDoHeroi = calcularNivelDoHeroi(nomeDoHeroi, xpDoHeroi);
  
  // Exibe a mensagem com o nome e o nível do herói
  console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}, com XP de ${xpDoHeroi}`);
  
  