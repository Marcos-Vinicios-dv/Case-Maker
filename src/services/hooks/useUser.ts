import { useCallback } from 'react';
import api from '../api';

interface useUserData {
  signIn: (email: string, password: string) => Promise<ApiResponseUser>;
  signUp: (
    email: string,
    nome: string,
    password: string
  ) => Promise<ApiResponseUser>;
  editUser: (
    email: string,
    nome: string,
    password: string,
    token: string
  ) => Promise<ApiResponseUser>;
}

export type User = {
  email: string;
  nome: string;
  token: string;
  imageUrl: string;
  _id: string;
};

export interface ApiResponseUser {
  usuario: User;
}

export const useUser = (): useUserData => {
  const signIn = useCallback(async (email: string, password: string) => {
    const response = api.post('usuarios/login', {
      email,
      password,
    });

    return (await response).data;
  }, []);

  const signUp = useCallback(
    async (email: string, nome: string, password: string) => {
      const response = api.post('usuarios/registrar', {
        email,
        nome,
        password,
      });

      return (await response).data;
    },
    []
  );

  const editUser = useCallback(
    async (email: string, nome: string, password: string, token: string) => {
      const response = api.put(
        'usuarios',
        {
          email,
          nome,
          password,
        },
        {
          headers: {
            Authorization: `CaseMaker ${token}`,
          },
        }
      );

      return (await response).data;
    },
    []
  );

  return { signIn, signUp, editUser };
};
