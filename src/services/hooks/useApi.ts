import axios from 'axios';
import { useCallback } from 'react';

const api = axios.create({
  baseURL: 'http://localhost:3333/v1/api/',
});

export default api;

interface useApiData {
  signIn: (email: string, password: string) => Promise<ApiResponseSignIn>;
  signUp: (
    email: string,
    nome: string,
    password: string
  ) => Promise<ApiResponseSignUp>;
}

export type User = {
  email: string;
  nome: string;
  token: string;
};

// interface ApiResponseProducts {}

interface ApiResponseSignIn {
  usuario: User;
}

type ApiResponseSignUp = ApiResponseSignIn;

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

  return { signIn, signUp };
};
