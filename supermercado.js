var items = [];

document.querySelector("input[type='submit']").addEventListener("click", () => {
  var nomeProduto = document.querySelector("input[name='nome_produto']");
  var precoProduto = document.querySelector("input[name='preco_produto']");

  if (nomeProduto.value == "" && precoProduto.value == "") {
    alert("Coloque o Nome e o Preço do Produto para Cadastrar");
    return;
  }

  if (nomeProduto.value == "") {
    alert("Coloque o nome do Produto para Cadastrar");
    return;
  }

  if (precoProduto.value == "") {
    alert("Coloque o Preço do Produto para Cadastrar");
    return;
  }
  items.push({
    nome: nomeProduto.value,
    preco: precoProduto.value,
  });

  //       <div class="lista-produto-single">
  //         <h2>RedBull</h2>
  //         <h2 class="preco_produto"><span>R$ 15,00</span></h2>
  //       </div>

  let listaProdutos = document.querySelector(".lista-produtos");
  let soma = 0;
  listaProdutos.innerHTML = "";
  items.map((value) => {
    soma += parseFloat(value.preco);
    listaProdutos.innerHTML += `
        <div class="lista-produto-single">
          <h2>${value.nome}</h2>
          <h2 class="preco_produto"><span>R$ ${(parseFloat(value.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))}</span></h2>
        </div>
        `;
  });

  soma = parseFloat(soma).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  let somaProduto = document.querySelector(".soma-produto");
  somaProduto.innerHTML = `R$ ${soma}`;
  nomeProduto.value = "";
  precoProduto.value = "";
});

document.querySelector(".limpar-lista").addEventListener("click", () => {
  items = [];
  let listaProdutos = document.querySelector(".lista-produtos");
  let somaProduto = document.querySelector(".soma-produto");
  listaProdutos.innerHTML = "";
  somaProduto.innerHTML = "R$ 0,00";
});
