import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

interface CountState {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const countContext = createContext<number>(0)
const setCountContext = createContext<Dispatch<SetStateAction<number>>>(
  () => undefined
)

// const countContext = createContext<CountState>({
//   count: 0,
//   setCount: () => undefined,
// });



const CountProvider: FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <countContext.Provider value={count}>
      <setCountContext.Provider value={setCount}>
        {children}
      </setCountContext.Provider>
    </countContext.Provider>
  );
};

const useCountValue = () => useContext(countContext);
const useCountSetValue = () => useContext(setCountContext);

const Button = () => {
  console.log("render ボタン");

  const setCount = useCountSetValue();

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  return (
    <div>
      <button onClick={increment}>+1</button>
    </div>
  );
};

const DisplayCount = () => {
  console.log("render カウント");

  const count = useCountValue();

  return <p>カウント: {count}</p>;
};

const OtherComponent = () => {
  console.log("render 全然関係ないコンポーネント");

  return <p>全然関係ない</p>;
};

const App = () => {
  return (
    <div className="App">
      <DisplayCount />
      <Button />
      <OtherComponent />
    </div>
  );
};

const ContextCounter = () => {
  return (
    <CountProvider>
      <App />
    </CountProvider>
  );
};

export default ContextCounter;