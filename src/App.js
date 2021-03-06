import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Dictionary</h1>
      <main>
        <Dictionary defaultkey="welcome" />
      </main>
      <footer>
        <p> Coded by Francesca Giunchedi </p>{" "}
        <a
          href="https://github.com/francescagiunchedi/dictionary_app_react"
          target="_blank"
          rel="noreferrer"
        >
          source code
        </a>
      </footer>
    </div>
  );
}

export default App;
