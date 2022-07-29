import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboards from "./components/Keyboards/Keyboards";

const App = () => {
  return (
    <>
      <div className="container">
        <Info />
        <main className="phone">
          <Keyboards />
          <Actions />
        </main>
      </div>
    </>
  );
};

export default App;
