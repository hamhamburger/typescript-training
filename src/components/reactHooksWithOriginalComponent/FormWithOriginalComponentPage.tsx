/* eslint-disable @typescript-eslint/no-misused-promises */
import React,{useState,useRef} from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { MyTextArea } from './MyTextArea'
import { RhfTextArea } from './RhfTextArea'



const FormWithOriginalComponentPage = ():JSX.Element => {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState<string>("")

  return (
    <div>
      <MyTextArea
        onChange={(e) => {
          setValue(e.target.value)
          console.log(value)
        }}
        value={value} onBlur={(e) => console.log(e)}
        inputRef={undefined}
      />

    </div>
  )

}

export default FormWithOriginalComponentPage