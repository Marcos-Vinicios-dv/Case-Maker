export function addAoCarrinho(produto) {
  return {
    // nome do modulo/action
    type: '@carrinho/ADICIONAR',
    produto,
  };
}

export function removerDoCarrinho(id) {
  return { 
    // nome do modulo/action
    type: '@carrinho/REMOVER',
     id, 
  };
}

export function alterarQuantidade(id, quantidade) {
  return {
    type: '@cart/ATUALIZAR_QUANTIDADE',
    id,
    quantidade,
  }
}