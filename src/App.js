import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/index";
import Comp from "./services/Comp";
import Test2 from "./services/Test2";

function App() {
  console.log("parent render")
  return (
    <div>
      <Comp />
      <Test2 />
    </div>
  );
}

export default App;
