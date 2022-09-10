
import React from 'react'

type Props= {
  index: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onDelete: () => void;
}

const Edit = (
  {
    index,
    value,
    onChange,
    onSave,
    onDelete
  }: Props
): JSX.Element => {
  return (
    <div>
      <span>通知先{index+1}</span>
      <input value={value} onChange={onChange} />
      <button onClick={onSave}>保存</button>
      <button onClick={onDelete}>削除</button>
    </div>
  )
}

export default Edit