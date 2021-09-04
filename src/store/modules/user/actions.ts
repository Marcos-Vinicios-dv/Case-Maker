import { User } from '../../../services/hooks/useUser';

export const signInUser = (user: User) => {
  return {
    type: '@user/SIGN_IN_USER',
    payload: {
      user,
    },
  };
};

export const logout = () => {
  return {
    type: '@user/LOGOUT',
    payload: {},
  };
};

export const updateUser = (user: User) => {
  return {
    type: '@user/UPDATE_USER',
    payload: { user },
  };
};
