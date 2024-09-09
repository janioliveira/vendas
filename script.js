const produtos = [
    { id: 1, nome: 'Produto 1', preco: 50 },
    { id: 2, nome: 'Produto 2', preco: 100 }
];

let carrinho = [];

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalElement = document.getElementById('total');
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco}`;
        
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Excluir';
        btnRemover.addEventListener('click', () => removerDoCarrinho(index));
        
        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
        
        total += item.preco;
    });

    totalElement.textContent = total.toFixed(2);
}

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
    }
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id'));
        adicionarAoCarrinho(id);
    });
});
