import React, { useRef, useState } from 'react';
import * as Yup from 'yup';

import { Form } from './styles';

function Login() {
  const formRef = useRef(null);
  const [erros, setErros] = useState();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Digite um e-mail!'),
        senha: Yup.string().required('Digite uma senha!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
      setErros();
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        setErros(errorMessages);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      {/* <h1>Login</h1>
      <div>
        <img src={Profile} alt="" />
        <Input type="email" name="email" placeholder="E-mail" />
      </div>
      {erros && <label>{erros.email}</label>}
      <div>
        <img src={Senha} alt="" />
        <Input type="password" name="senha" placeholder="Senha" />
      </div>
      {erros && <label>{erros.senha}</label>}
      <strong>Esqueci minha senha</strong>
      <button type="submit">LOGIN</button> */}
    </Form>
  );
}

export default Login;
