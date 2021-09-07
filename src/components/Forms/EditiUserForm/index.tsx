import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../Input/input';
import { useApi, User } from '../../../services/hooks/useUser';

import { Form } from './styles';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/modules/user/actions';

type EditUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

interface EditUserFormProps {
  user: User;
  editable: boolean;
}

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

export const EditUserForm = ({ user, editable }: EditUserFormProps) => {
  const { editUser } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState } = useForm<EditUserFormData>({
    resolver: yupResolver(EditUserFormSchema),
    defaultValues: {
      name: user.nome,
      email: user.email,
    },
  });

  const { errors } = formState;

  const handleCreateSubmit: SubmitHandler<EditUserFormData> = async ({
    email,
    name,
    password,
  }) => {
    try {
      setIsLoading(true);

      const { usuario } = await editUser(email, name, password, user.token);

      dispatch(updateUser(usuario));

      const serialUser = JSON.stringify({
        email: usuario.email,
        nome: usuario.nome,
        token: usuario.token,
      });

      localStorage.setItem('@caseMaker:user', serialUser);
    } catch (e) {
      console.warn(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateSubmit)}>
      <h1>Editar</h1>
      <div>
        <Input
          name="name"
          type="text"
          disabled={editable}
          placeholder="Novo Nome"
          error={errors.name}
          {...register('name')}
        />
        <Input
          name="email"
          type="email"
          disabled={editable}
          placeholder="Novo E-mail"
          error={errors.email}
          {...register('email')}
        />
        <Input
          name="password"
          type="password"
          disabled={editable}
          placeholder="Nova Senha"
          error={errors.password}
          {...register('password')}
        />
        <Input
          name="password_confirmation"
          type="password"
          disabled={editable}
          placeholder="Confirmação de Senha"
          error={errors.password_confirmation}
          {...register('password_confirmation')}
        />
      </div>
      <button type="submit" disabled={editable}>
        {isLoading ? 'Alterando...' : 'Alterar'}
      </button>
    </Form>
  );
};
