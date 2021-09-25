import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
