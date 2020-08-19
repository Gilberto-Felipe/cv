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
      <div className="row">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
