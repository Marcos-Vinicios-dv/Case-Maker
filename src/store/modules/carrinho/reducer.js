import produce from 'immer';

// reducer
export const carrinho = (state = [], action) => {
  switch (action.type) {
    case '@carrinho/SUCESSO_ADICIONAR':
    return produce(state, draft => {
      const { produto } = action;
       
      draft.push(produto);
    });
    case '@carrinho/REMOVER':
      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.id);

        if (produtoIndex >= 0) {
          draft.splice(produtoIndex, 1);
        }
      });
      case '@carrinho/SUCESSO_ALTERAR_QUANTIDADE': {
        return produce(state, draft => {
          const produtoIndex = draft.findIndex(p => p.id === action.id);

          if (produtoIndex >= 0) {
            draft[produtoIndex].quantidade = Number(action.quantidade)
          }
        });
      }
    default:
      return state;
  }
}