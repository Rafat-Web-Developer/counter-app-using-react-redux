import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./redux/store";

function App() {
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
        Simple Counter Application Using React And Redux
      </h1>

      <div className='max-w-md mx-auto mt-10 space-y-5'>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </div>
  );
}

export default App;
