let item = document.getElementById("lista-produtos");
let total = document.getElementById("valor-total");
let precoTotal = 0;


function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value; 
    let valorUnitario = produto.split("R$")[1];
    let nomeItem = produto.split("-")[0];
    let valorTotalItem = valorUnitario*quantidade;
    if(document.getElementById("quantidade").value <= 0){  
      alert("Quantidade inválida. Verifique e tente novamente!");
      limparQtd();
      return;
    }
    item.innerHTML = item.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem}<span class="texto-azul">R$${valorTotalItem}</span>
  </section>`;
    precoTotal = precoTotal + valorTotalItem;
    total.innerHTML = `R$ ${precoTotal}`;
    limparQtd();
}
 

function limpar(){
    item.innerHTML = "";
    total.innerHTML = "";
    limparQtd();
    //quantidade.value = "";
    precoTotal = 0;
   
}

function limparQtd(){
  document.getElementById("quantidade").value = "";
}
document.addEventListener("DOMContentLoaded", limpar());