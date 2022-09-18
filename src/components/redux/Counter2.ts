import { createAction,createReducer } from "@reduxjs/toolkit";

interface CounterState{
  value:number
}

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')

const initialState: CounterState = {value:0}

const counterReducer = createReducer()