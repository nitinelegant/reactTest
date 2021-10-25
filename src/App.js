import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/index";
import history from "./config/history";
import Routes from "./navigation/Routes";

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Routes history={history} />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
