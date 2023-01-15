import React from 'react'
import { FormWrapper, TextInput, TextLabel } from './formInput.styled'

const FormInput = ({label, value, name,type}) => {
  return (
    <>
    <FormWrapper>
        <TextInput name={name} type={type}/>
        {
            label?(<TextLabel value={value.length}>{label}</TextLabel>):''
        }
    </FormWrapper>
    </>
  )
}

export default FormInput