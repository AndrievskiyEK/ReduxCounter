export function CounterWidget ({
    counter,
    onIncrementBtnClick,
    onDecrementBtnClick,
    onClearBtnClick,
}) {
    return (
        <>
          <div>
            <p>{counter}</p>
            <button onClick={onIncrementBtnClick}>+1</button>
            <button onClick={onDecrementBtnClick}>-1</button>
            <button onClick={onClearBtnClick}>Очистить</button>
          </div>
        </>
      )
}