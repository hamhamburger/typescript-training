import { Controller, Control } from "react-hook-form";
import { MyTextArea } from './MyTextArea';



type FormInput = {
  name: string  // TextField用
}



type Props = {
  control: Control<FormInput>
}

const IndependentFieldContainer = ({ control }: Props): JSX.Element => {
 return (
    <Controller 
      control={control}
      name="name"
      defaultValue={""}
      rules={{ required: { value: true, message: "入力必須です" } }}
     render={({ field, fieldState: { error } }) =>
        // const {onChange} = field
       (
        <MyTextArea
          {...field}
          error={(error?.message !== null)}
         />
        )
      
      
       }
     />
  )

}

export default IndependentFieldContainer