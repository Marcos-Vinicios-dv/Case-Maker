import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../Input/input';
import { useApi } from '../../../services/hooks/useApi';

import { Form } from './styles';

type EditUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const EditUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export const EditUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useApi();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(EditUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateSubmit: SubmitHandler<EditUserFormData> = async ({
    email,
    name,
    password,
  }) => {
    try {
      setIsLoading(true);
      signUp(email, name, password);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateSubmit)}>
      <h1>Editar</h1>
      <div>
        <Input
          name="name"
          type="text"
          placeholder="Nome"
          error={errors.nome}
          {...register('name')}
        />
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
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirmação de Senha"
          error={errors.password_confirmation}
          {...register('password_confirmation')}
        />
      </div>
      <button type="submit">{isLoading ? 'Alterando...' : 'Alterar'}</button>
    </Form>
  );
};
