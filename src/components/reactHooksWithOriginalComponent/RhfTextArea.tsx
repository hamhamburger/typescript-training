import { DeepMap, FieldError, FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { MyTextArea,MyTextAreaProps } from './MyTextArea'
import classNames from 'classnames';

export type RhfTextAreaProps<T extends FieldValues> = MyTextAreaProps & UseControllerProps<T>;

/**
 * react-hook-formラッパー
 */
export const RhfTextArea = <T extends FieldValues>(props: RhfTextAreaProps<T>):JSX.Element => {
  const { name, control, placeholder, className } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <MyTextArea
      inputRef={ref}
      className={classNames(formControlStyles.formInput, formControlStyles.formTextArea, className)}
      placeholder={placeholder}
      {...rest}
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      error={(errors[name] !== undefined) ? `${(errors[name] as DeepMap<FieldValues, FieldError>).message}` : undefined}
    />
  );
};