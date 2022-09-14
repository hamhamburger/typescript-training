/* eslint-disable @typescript-eslint/no-misused-promises */
import React,{useState,useRef} from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { MyTextArea } from './MyTextArea'
import SingleForm from './SingleForm'



const FormWithOriginalComponentPage = ():JSX.Element => {
  
  return (
    <div>
      <SingleForm />

    </div>
  )

}

export default FormWithOriginalComponentPage