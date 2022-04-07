import "./App.css";
import { Route } from "react-router-dom";

import { HomePage, ShopPage } from "./pages";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
