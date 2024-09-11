let item = document.getElementById("lista-produtos");
let total = document.getElementById("valor-total");
let valorAdd = [];


function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value; 
    let valorUnitario = produto.split("R$")[1];
    let nomeItem = produto.split("-")[0];
    let valorTotalItem = valorUnitario*quantidade;    
    item.innerHTML = item.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem}<span class="texto-azul">R$${valorTotalItem}</span>
  </section>`;
    valorAdd.push(valorTotalItem);
    let precoTotal = 0;
    for(let i = 0; i <valorAdd.length; i++) {
        precoTotal += valorAdd[i];
    }
    total.innerHTML = `R$ ${precoTotal}`;
    document.getElementById("quantidade").value = "";
}
 



function limpar(){
    item.innerHTML = "";
    total.innerHTML = "";
    let quantidade = document.getElementById("quantidade")
    quantidade.value = "";
    valorAdd.length = 0;
   
}

document.addEventListener("DOMContentLoaded", limpar());