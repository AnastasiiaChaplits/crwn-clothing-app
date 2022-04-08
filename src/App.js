import "./App.css";
import { Route, Switch } from "react-router-dom";

import { HomePage, ShopPage, SignInAndSignUpPage } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
