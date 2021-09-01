import produce from 'immer';
import { Reducer } from 'redux';
import { User } from '../../../services/hooks/useApi';

export interface UserState {
  user: User;
}

const loadUserFromLocalStorage = () => {
  try {
    const serialState = localStorage.getItem('user');

    if (serialState === null) return { email: '', nome: '', token: '' };

    return JSON.parse(serialState);
  } catch (e) {
    console.warn(e);
    return { email: '', nome: '', token: '' };
  }
};

const INITIAL_STATE: User = loadUserFromLocalStorage();

export const user: Reducer<User> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  return produce(state, (draft) => {
    switch (type) {
      case 'SIGN_IN_USER':
        const { user } = payload;

        draft.email = user.email;
        draft.nome = user.nome;
        draft.token = user.token;
        break;

      case 'LOGOUT':
        localStorage.removeItem('user');
        draft.email = '';
        draft.nome = '';
        draft.token = '';
        break;

      default:
        return draft;
    }
  });
};
