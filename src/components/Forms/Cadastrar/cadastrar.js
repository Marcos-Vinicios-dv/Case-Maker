import React, { useRef, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Scope } from '@unform/core'
import Input from '../input';

import  { Form, InputSection }  from './styles';

function Cadastrar(cadastrar, login) {
  const formRef = useRef(null);
  const [ erros, setErros ] = useState();

  useEffect(() => {
    console.log(erros);
  }, [erros])

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Digite um e-mail!'),
        senha: Yup.string().required('Digite uma senha!'),
        cpf: Yup.string().min(11, 'Digite um CPF válido!'),
        nome: Yup.string().required('Nome é necessário!'),
        endereco: Yup.object().shape({
          rua: Yup.string().required('Este campo é obrigatório!'),
          bairro: Yup.string().required('Este campo é obrigatório!'),
          cidade: Yup.string().required('Este campo é obrigatório!'),
          estado: Yup.string().required('Este campo é obrigatório!'),
          cep: Yup.string().min(8, 'Digite um CEP válido!'),
        })
      });

      await schema.validate(data, {
        abortEarly: false,
      })
      console.log(data);
      setErros();
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
            errorMessages[error.path] = error.message;
        })

        setErros(errorMessages);
      }
    } 
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <h1>Cadastrar</h1>
      <InputSection>
        <div>
        <Input type="text" name="nome" placeholder="Nome completo"/>
        </div>
        { erros && <label>{erros.nome}</label> }
        <div>
        <Input type="email" name="email" placeholder="E-mail"/>
        </div> 
        { erros && <label>{erros.email}</label> }     
        <div>
        <Input type="password" name="senha" placeholder="Senha"/>
        </div>
        { erros && <label>{erros.senha}</label> }
        <div>
        <Input type="text" name="cpf" placeholder="CPF"/>
        </div>
        { erros && <label>{erros.cpf}</label> }
        <Scope path="endereco">
          <div>          
          <Input type="text" name="rua" placeholder="Rua"/>
          </div>
          { erros && <label>{erros['endereco.rua']}</label> }
          <div>          
          <Input type="text" name="bairro" placeholder="Bairro"/>
          </div>
          { erros && <label>{erros['endereco.bairro']}</label> }
          <div>          
          <Input type="text" name="cidade" placeholder="Cidade"/>
          </div>
          { erros && <label>{erros['endereco.cidade']}</label> }
          <div>          
          <Input type="text" name="estado" placeholder="Estado"/>
          </div>
          { erros && <label>{erros['endereco.estado']}</label> }
          <div>          
          <Input type="text" name="cep" placeholder="CEP"/>
          </div>
          { erros && <label>{erros['endereco.cep']}</label> }
        </Scope>
        </InputSection>
      <button type="submit">CADASTRAR</button>
    </Form>
  );
}

export default Cadastrar;