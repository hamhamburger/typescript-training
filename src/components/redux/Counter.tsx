import { useSelector, useDispatch } from "react-redux";
import { selectGeneration,changeGeneration } from "../../redux/generation";

const ReduxCounter = ():JSX.Element => {
  const generation = useSelector(selectGeneration)
  const dispatch = useDispatch()
  return(
    <div>
      <button type="button" onClick={()=> dispatch(changeGeneration("First"))}>
        First Generation
      </button>
      <button type="button" onClick={()=> dispatch(changeGeneration("Second"))}>
        Second Generation
      </button>
      <div>{`Generation is ${generation}`}</div>
    </div>
  )
}

export default ReduxCounter