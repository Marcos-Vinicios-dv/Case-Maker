import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from './styles';

import * as yup from 'yup';
import { Input } from './Input/input';

type SignInFormData = {
  email: string;
  password: string;
};

const sigInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export const SignInform = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(sigInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(handleSignIn)}>
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

      <button type="submit">Login</button>
      <span>Esqueci minha senha</span>
    </Form>
  );
};
