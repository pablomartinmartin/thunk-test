import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Images from "./components/Images.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <Images />
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
