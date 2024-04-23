import "./App.css";
import { BoardGame } from "./components/BoardGame";

function App() {
	return (
		<main className="board">
			<h1>Tic tac toe</h1>
			<BoardGame />
		</main>
	);
}

export default App;
