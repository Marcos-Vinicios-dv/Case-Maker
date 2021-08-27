import { Overlay } from './styles';

export const AlertMobile = () => {
  return (
    <Overlay>
      <div>
        <h1>Aviso!</h1>
        <p>
          Para realizar essa ação é necessário fazer o download do aplicativo,
          deseja continuar?
        </p>
        <div>
          <button type="button">Voltar</button>
          <button type="button">Continuar</button>
        </div>
      </div>
    </Overlay>
  );
};
