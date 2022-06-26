import "./App.css";
import Bgdecoration from "./Bgdecoration";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Dictionary</h1>
      <main>
        <Dictionary />
      </main>
      <footer>
        <p> Coded by Francesca Giunchedi </p>
      </footer>
      <Bgdecoration />
    </div>
  );
}

export default App;
