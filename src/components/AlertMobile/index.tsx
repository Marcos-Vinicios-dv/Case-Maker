import { useHistory } from 'react-router-dom';
import { Overlay } from './styles';

export const AlertMobile = () => {
  const history = useHistory();
  return (
    <Overlay>
      <div>
        <h1>Aviso!</h1>
        <p>
          Essa funcionalidade esta disponível apenas na versão para
          computadores!
        </p>
        <div>
          <button type="button" onClick={() => history.goBack()}>
            Voltar
          </button>
        </div>
      </div>
    </Overlay>
  );
};
