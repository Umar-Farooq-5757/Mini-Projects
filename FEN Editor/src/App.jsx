import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <main className="bg-[#16171d] text-white min-h-screen">
      <Header />
      <Board/>
    </main>
  );
}

export default App;
