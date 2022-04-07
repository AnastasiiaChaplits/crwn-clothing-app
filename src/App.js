import "./App.css";
import { Route, Switch } from "react-router-dom";

import { HomePage, ShopPage } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
