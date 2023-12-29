import { useDispatch, useSelector } from "react-redux"
import { getCounter } from "./selectors";
import { increment, decrement, clear } from "./actions";
import { CounterWidget } from "../components/CounterWidget/CounterWidget";




function CounterPage() {
  const counter = useSelector(getCounter);
  const dispath = useDispatch()

  function handleIncrementBtnClick () {
    dispath(increment())
  }

  function handleDecrementBtnClick () {
    dispath(decrement())
  }

  function handleClearBtnClick () {
    dispath(clear())
  }

  return (
    <>
      <div>
        <CounterWidget
          counter={counter}
          onIncrementBtnClick={handleIncrementBtnClick}
          onDecrementBtnClick={handleDecrementBtnClick}
          onClearBtnClick={handleClearBtnClick}
        />        
      </div>
    </>
  )
}

export default CounterPage
