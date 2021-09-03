import { User } from '../../../services/hooks/useApi';

export const signInUser = (user: User) => {
  return {
    type: 'SIGN_IN_USER',
    payload: {
      user,
    },
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: {},
  };
};

export const updateUser = (user: User) => {
  return {
    type: 'UPDATE_USER',
    payload: { user },
  };
};
