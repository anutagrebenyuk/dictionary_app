import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <h1 className="dictionary text-center">DICTIONARY</h1>
      <Dictionary defaultKeyword="spring" />
    </div>
  );
}

export default App;
