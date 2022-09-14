import React from 'react'
import { Link } from 'react-router-dom'
const Welcome = ():JSX.Element => {
  return (
    <div>
      <h2>ここは以下の手順で行ってきた勉強（主にロジック）の過程で生まれた<br/>コンポーネント達の墓場です</h2>
      <ol>
        <li>ネットや本で見つけたサンプルコードを読む</li>
        <li>構造を理解でき次第、なるべく元のコードを見ずに自分で再現を試みる
          難し目だったらまずは模写から行く</li>
        <li>完成したら更にTypeScript化してみたり機能を付け加えたりしてみる</li>
      </ol>
      <ul style={{listStyle:"none"}}>
        <li><Link to={"task"}>みんな大好きタスクリスト</Link></li>
        <li><Link to={"counter"}>カウンター</Link></li>
        <li><Link to={"notification"}>useReducerを学んだ時のやつ</Link></li>
        <li><Link to={"form"}>rhfのテスト</Link></li>
        <li><Link to={"form_with_original_component"}>rhfとMUIや自作コンポーネントの連携</Link></li>
      </ul>
    </div>
  )
}

export default Welcome