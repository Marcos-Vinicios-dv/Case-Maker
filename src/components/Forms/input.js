import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} {...rest}/>
      { error && <span style={{color: "red"}}>{error}</span> }
    </>
  );
}

export default Input;