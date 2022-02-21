import { useRecoilState } from 'recoil';
import { counterState } from './atom';

function App() {
  const [count, setCount] = useRecoilState(counterState);

  const onClickPlus = () => setCount(count + 1);
  const onClickMinus = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
      </div>
    </div>
  );
}

export default App;
