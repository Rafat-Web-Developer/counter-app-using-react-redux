import { Provider } from "react-redux";
// import VariableCounter from "./components/VariableCounter";
import DynamicCounter from "./components/DynamicCounter";
import HooksCounter from "./components/HooksCounter";
// import Counter from "./components/Counter";
import store from "./redux/store";

function App() {
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
        Simple Counter Application Using React And Redux
      </h1>

      <div className='max-w-md mx-auto mt-10 space-y-5'>
        <Provider store={store}>
          {/* <Counter /> */}
          <HooksCounter />
          <DynamicCounter />
          {/* <VariableCounter /> */}
          {/* <VariableCounter dynamic /> */}
        </Provider>
      </div>
    </div>
  );
}

export default App;
