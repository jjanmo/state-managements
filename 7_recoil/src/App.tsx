import { useRecoilState } from 'recoil';
import { counterState } from './atom';

function App() {
  const [count, setCount] = useRecoilState(counterState);

  const onClickPlus = () => setCount(count + 1);
  const onClickMinus = () => setCount(count - 1);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <h1 className="text-blue-500 font-bold text-2xl">{count}</h1>
      <div>
        <button
          className="text-3xl bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={onClickPlus}
        >
          +
        </button>
        <button
          className="text-3xl  px-8 py-3 border border-transparent font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          onClick={onClickMinus}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
