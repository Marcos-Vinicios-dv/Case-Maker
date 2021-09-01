import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import iconPerson from '../../assets/images/iconPerson.svg';
import { EditUserForm } from '../../components/Forms/EditiUserForm/index';
import { User } from '../../services/hooks/useApi';
import { Logout } from '../../store/modules/user/actions';
import { UserState } from '../../store/modules/user/reducer';
import { Container, BoxInfo } from './styles';

export const Profile = () => {
  const [isEditableOn, setIsEditableOn] = useState(false);
  const user = useSelector<UserState, User>((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    dispatch(Logout());
    history.push('/');
  }

  return (
    <Container>
      <BoxInfo isEditableOn={isEditableOn}>
        <img src={iconPerson} alt="icon" />

        <div>
          <h1>{user.nome}</h1>
          <span>
            {' '}
            <MdEmail /> {user.email}
          </span>
          <div>
            <button
              type="button"
              onClick={() => setIsEditableOn(!isEditableOn)}
            >
              {isEditableOn ? 'Cancelar' : 'Editar'}
            </button>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
      </BoxInfo>

      <EditUserForm />
    </Container>
  );
};
