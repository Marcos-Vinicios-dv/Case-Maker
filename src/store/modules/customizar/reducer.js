
export default function customizar(state = (null) , action)  {
  switch (action.type) {
    case '@customizar/SELECIONAR_GABINETE':
      const { gabinete } = action;
      return gabinete;
    default:
      return state
  }
}