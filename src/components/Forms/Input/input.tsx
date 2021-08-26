import { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, ...rest },
  ref
) => {
  return (
    <InputContainer>
      <input ref={ref} {...rest} />
      {!!error && <span>{error.message}</span>}
    </InputContainer>
  );
};

export const Input = forwardRef(InputBase);
