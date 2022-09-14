import { Controller, Control } from "react-hook-form";
import { TextField } from "@mui/material";
import React from 'react';


type FormInput = {
  name: string  // TextField用
}



type Props = {
  control: Control<FormInput>
}

const FruitNameField = ({ control }: Props): JSX.Element => {
 return (
    <Controller 
      control={control}
      name="name"
      defaultValue={""}
      rules={{ required: { value: true, message: "入力必須です" } }}
      render={({ field, fieldState: { error } }) =>
        (
        <TextField
          {...field}
          label="品種名"
          error={(error?.message !== null)}
          helperText={error?.message}
         />
        )
      
      
       }
     />
  )

}

export default FruitNameField