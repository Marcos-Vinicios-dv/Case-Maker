import produce from 'immer';

// reducer
export default function carrinho(state = [], action) {
  switch (action.type) {
    case '@carrinho/ADICIONAR':
    return produce(state, draft => {
      const produtoIndex = draft.findIndex(p => p.id === action.produto.id);

      if(produtoIndex >= 0) {
        draft[produtoIndex].quantidade += 1;
      } else {
        draft.push({
          ...action.produto,
          quantidade: 1,
        });
      }  
    });
    case '@carrinho/REMOVER':
      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.id);

        if (produtoIndex >= 0) {
          draft.splice(produtoIndex, 1);
        }
      });
      case '@cart/ATUALIZAR_QUANTIDADE': {
        if (action.quantidade <= 0) {
          return state;
        }
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