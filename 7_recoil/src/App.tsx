import { useRecoilState } from 'recoil';
import { counterState } from './atom';

function App() {
  const [count, setCount] = useRecoilState(counterState);

  const onClickPlus = () => setCount(count + 1);
  const onClickMinus = () => setCount(count - 1);

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <h1>{count}</h1>
      <div>
        <button className="text-red-600" onClick={onClickPlus}>
          +
        </button>
        <button onClick={onClickMinus}>-</button>
      </div>
    </div>
  );
}

export default App;
