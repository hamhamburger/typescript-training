import React from 'react'

type Props = {
  value: string;
  onClick: ()=>void
}

const View = ({value,onClick}:Props):JSX.Element => {
  return (
    <div>
      <span>{value === "" ? "入力されていません" : value}</span>
      <button onClick={onClick}>編集</button>
    </div>
  )
}

export default View