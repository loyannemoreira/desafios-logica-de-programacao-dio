/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


// Função para calcular o nível do jogador com base na quantidade de vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    return { saldoVitorias, nivel };
  }
  
  // Função para validar uma entrada como um número inteiro positivo
  function validarEntrada(mensagem) {
    let valor;
    while (true) {
      valor = parseInt(prompt(mensagem));
      if (!isNaN(valor) && valor >= 0) {
        break;
      }
      alert("Por favor, digite um número inteiro positivo válido.");
    }
    return valor;
  }
  
  // Solicitar ao usuário as quantidades de vitórias e derrotas
  const vitorias = validarEntrada("Digite a quantidade de vitórias:");
  const derrotas = validarEntrada("Digite a quantidade de derrotas:");
  
  // Calcular o nível do jogador
  const resultado = calcularNivel(vitorias, derrotas);
  
  console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível de ${resultado.nivel}`);
  