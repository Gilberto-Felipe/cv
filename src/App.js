import React from "react";
import logo from "./logo.svg";
import "materialize-css/dist/css/materialize.min.css";
import "./assets/scss/App.scss";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Soy el Header</h1>
      </header>
      <div className="row">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
