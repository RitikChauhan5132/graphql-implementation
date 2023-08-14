import { Suspense } from "react";
import "./App.css";
import Dogs from "./pages/Dogs";
import Home from "./pages/Home";
import SuspenseDogs from "./pages/SuspenseDogs";
import AddCharacter from "./pages/AddCharacter";
import RestApi from "./pages/RestApi";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Dogs /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <SuspenseDogs />
      </Suspense> */}
      {/* <AddCharacter /> */}
      <RestApi/>
    </div>
  );
}

export default App;
