import { User } from '../../../services/hooks/useApi';

export const signInUser = (user: User) => {
  return {
    type: 'SIGN_IN_USER',
    payload: {
      user,
    },
  };
};

export const Logout = () => {
  return {
    type: 'LOGOUT',
    payload: {},
  };
};
