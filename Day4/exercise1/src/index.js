import React from 'react'
import ReactDom from 'react-dom'
import './index.css'


const pTag=(
  <p>Signup With Your Email address To Recieve News & Updates</p>
)

const h1=(
  <h1> Subscribe</h1>
)

const firstNameInputField=()=>(
    <input
      type='text'
      placeholder='First Name'
      className='input-style'
      />
)
const lastNameInputField=()=>(
  <input
    type='text'
    placeholder='Last Name'
    className='input-style'
    />
)
const emailInputField=()=>(
    <input
    type='text'
    placeholder='Email'
    className='input-style'
    />
)
const submitInputField=()=>(
  <input
    type='submit'
    value='Submit'
    />
)

const inputContainer=()=>(

    <div className='input-container'>
      {firstNameInputField()}
      {lastNameInputField()}
      {emailInputField()}
    </div>
)
const App=()=>(
  <div className='form-container'>
  
    {inputContainer()}
    {submitInputField()}
  </div>
)
const rootElement=document.getElementById('root')

ReactDom.render(<App/>,rootElement)