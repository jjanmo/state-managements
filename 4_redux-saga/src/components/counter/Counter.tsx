import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { syncIncrement, syncDecrement } from '../../store/syncCounter/syncCounterSlice'

function Counter() {
  const dispatch = useAppDispatch()
  const syncCount = useAppSelector((state) => state.syncCounter.count)

  console.log(syncIncrement, syncDecrement)
  const handleSyncIncrement = () => {
    dispatch(syncIncrement())
  }
  const handleSyncDecrement = () => {
    dispatch(syncDecrement())
  }

  return (
    <>
      <div>
        <h1>Sync Counter</h1>
        <h2>{syncCount}</h2>
        <p>
          <button onClick={handleSyncIncrement}>+</button>
          <button onClick={handleSyncDecrement}>-</button>
        </p>
      </div>
      <hr />
      <div>
        <h1>Async Counter</h1>
        <h2>1</h2>
        <p>
          <button>+</button>
          <button>-</button>
        </p>
      </div>
    </>
  )
}

export default Counter
