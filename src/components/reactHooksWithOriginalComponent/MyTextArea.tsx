import { FormHelperText, TextareaAutosize, TextareaAutosizeProps } from '@mui/material'
import type { ChangeEventHandler, FocusEventHandler } from "react"

export type MyTextAreaProps = {
  error?: boolean;
  className?: string;
  placeholder?: string;
};

export const MyTextArea = (
  props: MyTextAreaProps & {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    onBlur: FocusEventHandler<HTMLTextAreaElement>;
  }
):JSX.Element => {
  return (
    <>
      <TextareaAutosize
        minRows={3}
        placeholder={props.placeholder}
        className={props.className}

        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        
      />
      {(props.error !== undefined) && <FormHelperText error>{props.error}</FormHelperText>}
    </>
  );
};