

import { useState, createContext, useContext } from 'react';
import ReactDOM from "react-dom/client";

const UserContext = createContext("")

import React from 'react'

const Greeting = () => {
  const [user, setUser] = useState("da")
  return (
    <UserContext.Provider value={user}>
      <h1>{`hello ${user}`}</h1>
      <Component2 />
    </UserContext.Provider>
  )
}

export default Greeting


function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(UserContext)
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

