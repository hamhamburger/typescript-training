import { createSlice } from "@reduxjs/toolkit";
import {RootState} from '../redux/store'

type Generation = {
  generation: string
}

const initialState: Generation = {
  generation: "first"
}

export const generationSlice = createSlice({
  name:"generation",
  initialState,
  reducers:{
    changeGeneration:(state,action) => {
      state.generation = action.payload
    }
  }
})

export const {changeGeneration} = generationSlice.actions

export const selectGeneration = (state: RootState):string => state.generationReducer.generation

export default generationSlice.reducer