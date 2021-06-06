export const customizar = (state = [], action) => {
  switch (action.type) {
    case '@customizar/SELECIONAR_GABINETE':
      const { gabinete } = action;
      return gabinete;
    default:
      return state;
  }
};
