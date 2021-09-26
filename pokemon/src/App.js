import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonDetail from "./pages/Detail";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <Route path="/detail/:name" exact>
          <PokemonDetail />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
