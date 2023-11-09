import React from 'react'
import ReactDom from 'react-dom'

const TextInputField=(props)=>(
  <input 
    type='text'
    placeholder= {props.message}
    className='input-style'
    />
)

const Button=(props)=>(
  <button className='button-style'>
    {props.label}
  </button>
)
const FormContainer=()=>(
  <div className='form-container'>
      <TextInputField message='First Name'/>
      <TextInputField message='Last Name'/>
      <TextInputField message='Email'/>
      <Button label='Submit'/>
      <Button label='Reset'/>
  </div>
)

const App=()=>(
  <div>
    <FormContainer/>
  </div>
)

const root=document.getElementById('root')
ReactDom.render(<App/>,root)