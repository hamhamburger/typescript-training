import { FormHelperText, TextareaAutosize, TextareaAutosizeProps } from '@mui/material'
import type { ChangeEventHandler, FocusEventHandler } from "react"

export type MyTextAreaProps = {
  error?: string;
  className?: string;
  placeholder?: string;
};

export const MyTextArea = (
  props: MyTextAreaProps & {
    inputRef: TextareaAutosizeProps['ref'];
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
        ref={props.inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {(props.error !== undefined) && <FormHelperText error>{props.error}</FormHelperText>}
    </>
  );
};