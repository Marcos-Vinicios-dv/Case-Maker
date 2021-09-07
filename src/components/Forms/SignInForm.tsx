import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Input } from './Input/input';
import { useApi } from '../../services/hooks/useUser';

import { Form } from './styles';
import { signInUser } from '../../store/modules/user/actions';
import { useState } from 'react';

type SignInFormData = {
  email: string;
  password: string;
};

const sigInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export const SignInform = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useApi();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(sigInFormSchema),
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);

      const { usuario } = await signIn(email, password);

      dispatch(signInUser(usuario));

      const serialUser = JSON.stringify({
        email: usuario.email,
        nome: usuario.nome,
        token: usuario.token,
      });

      localStorage.setItem('@caseMaker:user', serialUser);
      history.push('/');
    } catch (e) {
      console.warn(e);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSignIn)} loading={+isLoading}>
      <h1>Login</h1>
      <Input
        name="email"
        type="email"
        placeholder="E-mail"
        error={errors.email}
        {...register('email')}
      />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        error={errors.password}
        {...register('password')}
      />

      <button type="submit">{isLoading ? 'Carregando...' : 'Login'}</button>
      <span>
        <a href="http://localhost:3333/v1/api/usuarios/recuperar-senha">
          Esqueci minha senha
        </a>
      </span>
    </Form>
  );
};
