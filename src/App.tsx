import React, { useContext } from "react";
import Action from "./components/Action/Action";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboards from "./components/Keyboards/Keyboards";
import phoneContext from "./store/contexts/appPhoneContext";

const App = () => {
  const { phone, isCall } = useContext(phoneContext);

  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboards />
          <div className="actions">
            <Display phoneString={phone} />
            {isCall ? <Action text="Call" /> : <Action text="Hang" isActive />}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
