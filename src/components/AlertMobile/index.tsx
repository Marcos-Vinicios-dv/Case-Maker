import { useHistory } from 'react-router-dom';
import { Overlay } from './styles';

export const AlertMobile = () => {
  const history = useHistory();
  return (
    <Overlay>
      <div>
        <h1>Aviso!</h1>
        <p>
          Para realizar essa ação é necessário fazer o download do aplicativo,
          deseja continuar?
        </p>
        <div>
          <button type="button" onClick={() => history.goBack()}>
            Voltar
          </button>
          <a href="https://play.google.com/store/apps/details?id=com.google.android.youtube">
            <button type="button">Continuar</button>
          </a>
        </div>
      </div>
    </Overlay>
  );
};
