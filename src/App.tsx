import React from "react";
import Action from "./components/Action/Action";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboards from "./components/Keyboards/Keyboards";

function App() {
  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboards />
          <div className="actions">
            <Display />
            <Action text="Call" />
            <Action text="Hang" isActive />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
