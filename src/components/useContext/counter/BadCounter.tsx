import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

const countContext = createContext<number>(0)
const setCountContext = createContext<Dispatch<SetStateAction<number>>>(() => undefined)