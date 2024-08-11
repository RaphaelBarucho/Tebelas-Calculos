let aryn = [];

function adicionar(event) {
  event.preventDefault();

  let input = document.getElementById("input-numeros").value;
  let div3 = document.getElementById("div3");

  if (input < 1 || input > 100 || isNaN(input)) {
    window.alert("Valor inválido, por favor clique em ok, e digite novamente!");
  } else {
    if (aryn.indexOf(input) !== -1) {
      window.alert("O número já existe");
    } else {
      aryn.push(input);

      let op1 = document.createElement("option");
      op1.className = "opcoes";
      op1.innerText = input;
      let select = document.getElementById("tabelaselect");
      select.appendChild(op1);

      limpar();

      limparres();
    }
  }
}

function limparres() {
  let res1 = document.getElementById("res1");
      let res2 = document.getElementById("res2");
      let res3 = document.getElementById("res3");
      let res4 = document.getElementById("res4");
      let res5 = document.getElementById("res5");

      res1.remove()
      res2.remove()
      res3.remove()
      res4.remove()
      res5.remove()
}

function limpar() {
  document.getElementById("input-numeros").value = "";
}

function finalizar() {
  if (aryn.length == 0) {
    alert("Por favor adicione um numero primeiro antes de finalizar");
  } else {
    let botaoFinalizar = document.getElementById("botao-finalizar");
    let div2 = document.getElementById("div2");
    let menorn = Math.min(...aryn);
    let maiorn = Math.max(...aryn);
    let a = 1;

    let res1 = document.createElement("p");
    let tamaryn = aryn.length;
    res1.id = "res1";
    res1.innerText = `Ao todo, temos ${tamaryn} numeros cadastrados.`;

    let res2 = document.createElement("p");
    res2.id = "res2";
    res2.innerText = `O menor numero da tabela é: ${menorn}.`;

    let res3 = document.createElement("p");
    res3.id = "res3";
    res3.innerText = `O maior numero da Tabela é: ${maiorn}.`;

    let res4 = document.createElement("p");
    res4.id = "res4";
    let number = aryn.map(Number)
    let soma = number.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    res4.innerText = `Todos os valores somados tem o valor de: ${soma}.`;

    let res5 = document.createElement("p");
    res5.id = "res5";
    let media = soma / tamaryn
    res5.innerText = `A média de todos os valores é: ${media}.`;

    div2.appendChild(res1, botaoFinalizar);
    div2.appendChild(res2, botaoFinalizar);
    div2.appendChild(res3, botaoFinalizar);
    div2.appendChild(res4, botaoFinalizar);
    div2.appendChild(res5, botaoFinalizar);
  }
}

function resetar() {
  let opcoes = document.querySelectorAll(".opcoes")

  opcoes.forEach(opcao => {
    opcao.remove();
  });
  aryn = []

  limpar();
  limparres();
}
