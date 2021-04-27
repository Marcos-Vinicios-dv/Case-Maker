import React, { useRef } from 'react';
import * as Yup from 'yup';

import Senha from '../../../assets/images/Senha.svg';
import Profile from '../../../assets/images/ProfileL.svg';
import Input from '../input';

import  { Form }  from '../styles';

function Login() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Digite um e-mail!'),
        senha: Yup.string().required('Digite uma senha!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      })
      console.log(data);
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
      }
    } 
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
      <div>
        <img src={Profile} alt=""/>
        <Input type="email" name="email" placeholder="E-mail"/>
      </div>
      <div>
        <img src={Senha} alt=""/>
        <Input type="password" name="senha" placeholder="Senha"/>
      </div>
      <button type="submit">LOGIN</button>
    </Form>
  );
}

export default Login;