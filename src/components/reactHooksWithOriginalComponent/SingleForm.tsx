import {SubmitHandler, UnpackNestedValue, useForm} from "react-hook-form";
import { Box, Button } from "@mui/material";
import FruitNameField from "./FruitNameField";

type FormInput = {
  name: string  // TextField用
}

const SingleForm = (): JSX.Element => {
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
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <FruitNameField control={control} />
        <Button type="submit">送信</Button>
      </form>
    </>
  )

}

export default SingleForm