import IndependentFieldContainer from "./IndependentFieldContainer"
import {SubmitHandler, UnpackNestedValue, useForm} from "react-hook-form";
import { Button } from "@mui/material";


type FormInput = {
  name: string  // TextField用
}


const FormWithOriginalComponent = ():JSX.Element => {
   const { control, handleSubmit, getValues } = useForm<FormInput>()
  
  const printWithData = (data: UnpackNestedValue<FormInput>):void => {
    console.log("dataによる取り出し")
    const {name} = data
    console.log(`name ${name}`)
  }

  const printByGetValues = ():void => {

    console.log("getValues()による取り出し")
    const {name} = getValues()
    console.log(`name ${name}`)
  }

    const onSubmit: SubmitHandler<FormInput> = (data) => {
      printWithData(data)
      printByGetValues()
    }
  
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <IndependentFieldContainer control={control} />
        <Button type="submit">送信</Button>
      </form>
    </>
  )

}

export default FormWithOriginalComponent