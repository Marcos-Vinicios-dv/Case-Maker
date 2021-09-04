import { useCallback } from 'react';
import api from '../api';

interface useApiData {
  signIn: (email: string, password: string) => Promise<ApiResponseSignIn>;
  signUp: (
    email: string,
    nome: string,
    password: string
  ) => Promise<ApiResponseSignUp>;
  editUser: (
    email: string,
    nome: string,
    password: string,
    token: string
  ) => Promise<ApiResponseEditUser>;
}

export type User = {
  email: string;
  nome: string;
  token: string;
};

interface ApiResponseSignIn {
  usuario: User;
}

type ApiResponseSignUp = ApiResponseSignIn;

type ApiResponseEditUser = ApiResponseSignIn;

export const useApi = (): useApiData => {
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
