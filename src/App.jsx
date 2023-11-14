import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer style={{color : "white", paddingTop: "20px"}}>FOOTER HERE SOON</footer>
    </ div>
  );
}

export default App;
