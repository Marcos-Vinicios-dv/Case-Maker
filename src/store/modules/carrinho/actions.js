export function solicitarAddAoCarrinho(id) {
  return {
    // nome do modulo/action
    type: '@carrinho/SOLICITAR_ADICIONAR',
    id,
  };
}
export function addAoCarrinhoSucesso(produto) {
  return {
    // nome do modulo/action
    type: '@carrinho/SUCESSO_ADICIONAR',
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

export function solicitarAlterarQuantidade(id, quantidade) {
  return {
    type: '@carrinho/SOLICITAR_ALTERAR_QUANTIDADE',
    id,
    quantidade,
  }
}
export function alterarQuantidadeSucesso(id, quantidade) {
  return {
    type: '@carrinho/SUCESSO_ALTERAR_QUANTIDADE',
    id,
    quantidade,
  }
}