/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
type ValuesType = {
  name: string,
  introduction: string,
  department: 'product' | 'sales' | 'marketing' | ''
  programingLanguage: 'golang' | 'ruby' | 'javascript' | '',
  type: string
}


const FormPage = ():JSX.Element => {
  const { register, watch, handleSubmit, formState } = useForm<ValuesType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      introduction: '',
      department: '',
      programingLanguage: '',
      type:""
    }
  })

  const handleOnSubmit: SubmitHandler<ValuesType> = (values) => {
    console.log(values)
  }

  const handleOnError: SubmitErrorHandler<ValuesType> = (errors) => {
    console.log(errors)
  }

  return (
    <div>
   
      <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)} >
        <div>
          <label htmlFor='name'>Name</label>
          {!(formState.errors.name == null) &&
            <p>{formState.errors.name.message}</p>
            
          }
          <input
            id='name'
            type="text"
            {...register('name', {
              required: '* this is required filed'
            })}
          />
        </div>
        <div>
          <label htmlFor='introduction'>Introduction</label>
          {!(formState.errors.introduction == null) &&
            <p>{formState.errors.introduction.message}</p>
          }
          <textarea
            id='introduction'
            {...register('introduction', {
              required: '* this is required filed',
              minLength: {
                value: 10,
                message: '* please enter at least 10 characters'
              }
            })}
          />
        </div>

        <div>
          <label htmlFor='department'>Department</label>
          {(formState.errors.department !== undefined) &&
            <p>{formState.errors.department.message}</p>
          }
          <select
            id='department'
            {...register('department', {
              required: '* this is required filed'
            })}
          >
            <option value='' hidden>please selecting...</option>
            <option value='product'>Product</option>
            <option value='sales'>Sales</option>
            <option value='marketing'>Marketing</option>
          </select>
        </div>

        <div>
          <label htmlFor='type'>type</label>
          {(formState.errors.type !== undefined) && 
            <p>{formState.errors.type.message}</p>
          }
          <input id="type"
            {...register("type", {
              required: " this is required"
            })
          }
          />
        </div>


        {watch('department') === 'product' &&
          <>
            <label htmlFor='programing-langage'>Programing Language</label>
            <select
              id='programing-language'
              {...register('programingLanguage')} 
            >
              <option value='' hidden>please selecting...</option>
              <option value='golang'>Golang</option>
              <option value='ruby'>Ruby</option>
              <option value='javascript'>Javascript</option>
            </select>
          </>
        }


        <button type="submit" disabled={!formState.isDirty || formState.isSubmitting}>
           Click
         </button>
      </form>
    </div>
  )

}

export default FormPage