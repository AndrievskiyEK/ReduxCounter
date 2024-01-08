export function CounterWidget ({
    counter,
    isLoading,
    isError,

    isSaveSuccess,
    isSaveLoading,
    isSaveError,


    onIncrementBtnClick,
    onDecrementBtnClick,
    onClearBtnClick,
    onRetryBtnClick,
    onSaveBtnClick
}) {
    if (isLoading) {
      return (
        <div>
          <p>Загрузка...</p>
        </div>
      )
    }

    if (isError) {
      <div>
        <p>Ошибка</p>
        <button onClick={onRetryBtnClick}>Повторить</button>
      </div>
    }

    return (
        <>
          <div>
            <p>{counter}</p>
            <button onClick={onIncrementBtnClick}>+1</button>
            <button onClick={onDecrementBtnClick}>-1</button>
            <button  onClick={onClearBtnClick}>Clear</button>
            <button disabled={isSaveLoading} onClick={onSaveBtnClick}>Save</button>

            {isSaveLoading && <p>Идет сохранение...</p>}
            {isSaveError && <p>Ошибка сохранения счетчика</p>}
            {isSaveSuccess && <p>Успешное сохранение</p>}
          </div>
        </>
      )
}