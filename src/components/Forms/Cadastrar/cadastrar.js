import React, { useRef } from 'react';
import * as Yup from 'yup';

import Input from '../input';

import  { Form }  from '../styles';

function Cadastrar() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Digite um e-mail!'),
        senha: Yup.string().required('Digite uma senha!'),
        CPF: Yup.string().min(11, 'Digite um CPF valido'),
        CEP: Yup.string().min(8, 'Digite um CEP valido'),
        nome: Yup.string().required('Nome é necessário')
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
      <h1>Cadastrar</h1>
      <div>
      <Input type="text" name="nome" placeholder="Nome completo"/>
      </div>
      <div>
      <Input type="email" name="email" placeholder="E-mail"/>
      </div>      
      <div>
      <Input type="password" name="senha" placeholder="Senha"/>
      </div>
      <div>
      <Input type="text" name="CPF" placeholder="CPF"/>
      </div>
      <div>
      <Input type="text" name="CEP" placeholder="CEP"/>
      </div>
      <button type="submit">CADASTRAR</button>
    </Form>
  );
}

export default Cadastrar;