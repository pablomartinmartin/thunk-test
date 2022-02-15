import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Catalog from "./components/Catalog";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>Catalog</p>
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Catalog />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
