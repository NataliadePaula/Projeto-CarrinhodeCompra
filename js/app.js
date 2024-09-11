let item = document.getElementById("lista-produtos");
let total = document.getElementById("valor-total");
let precoTotal = 0;


function adicionar(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value; 
    let valorUnitario = produto.split("R$")[1];
    let nomeItem = produto.split("-")[0];
    let valorTotalItem = valorUnitario*quantidade;    
    item.innerHTML = item.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem}<span class="texto-azul">R$${valorTotalItem}</span>
  </section>`;
    precoTotal = precoTotal + valorTotalItem;
    total.innerHTML = `R$ ${precoTotal}`;
    document.getElementById("quantidade").value = "";
}
 

function limpar(){
    item.innerHTML = "";
    total.innerHTML = "";
    document.getElementById("quantidade").value = "";
    //quantidade.value = "";
    precoTotal = 0;
   
}

document.addEventListener("DOMContentLoaded", limpar());