import { useDispatch, useSelector } from "react-redux"
import { 
  getCounter,
  getIsLoading,
  getIsError,
  
  getIsSaveSuccess,
  getIsSaveLoading,
  getIsSaveError
} from "./selectors";
import { 
  increment, 
  decrement, 
  clear,
  load,
  save 
} from "./actions";
import { CounterWidget } from "../components/CounterWidget/CounterWidget";
import { useEffect } from "react";




function CounterPage() {
  const counter = useSelector(getCounter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  const isSaveSuccess = useSelector(getIsSaveSuccess);
  const isSaveLoading = useSelector(getIsSaveLoading);
  const isSaveError = useSelector(getIsSaveError);

  const dispath = useDispatch();

  useEffect(()=> {
    dispath(load())
  }, [])

  function handleIncrementBtnClick () {
    dispath(increment())
  }

  function handleDecrementBtnClick () {
    dispath(decrement())
  }

  function handleClearBtnClick () {
    dispath(clear())
  }

  function handleRetryBtnClick () {
    dispath(load())
  }

  function handleSaveBtnClick () {
    dispath(save(counter))
  }

  return (
    <>
      <div>
        <CounterWidget
          counter={counter}
          isLoading={isLoading}
          isError={isError}
          isSaveSuccess={isSaveSuccess}
          isSaveLoading={isSaveLoading}
          isSaveError={isSaveError}
          onIncrementBtnClick={handleIncrementBtnClick}
          onDecrementBtnClick={handleDecrementBtnClick}
          onClearBtnClick={handleClearBtnClick}
          onRetryBtnClick={handleRetryBtnClick}
          onSaveBtnClick={handleSaveBtnClick}
        />        
      </div>
    </>
  )
}

export default CounterPage
