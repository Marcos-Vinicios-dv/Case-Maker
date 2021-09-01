import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from './Input/input';
import { Form } from './styles';
import { useApi } from '../../services/hooks/useApi';
import { useState } from 'react';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

interface SignUpFormProps {
  onToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateUserFormSchema = yup.object().shape({
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

export const SignUpForm = ({ onToggleForm }: SignUpFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useApi();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateSubmit: SubmitHandler<CreateUserFormData> = async ({
    email,
    name,
    password,
  }) => {
    try {
      setIsLoading(true);
      signUp(email, name, password);

      setTimeout(() => {
        setIsLoading(false);
        onToggleForm(false);
      }, 500);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateSubmit)} loading={+isLoading}>
      <h1>Cadastrar</h1>
      <Input
        name="name"
        type="text"
        placeholder="Nome"
        autoFocus
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
      <button type="submit">{isLoading ? 'Carregando...' : 'Cadastrar'}</button>
    </Form>
  );
};
