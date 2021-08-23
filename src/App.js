import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import DetailsPage from "./pages/DetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pokedex">
            <PokedexPage />
          </Route>
          <Route exact path="/pokemon-detail/">
            <DetailsPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
