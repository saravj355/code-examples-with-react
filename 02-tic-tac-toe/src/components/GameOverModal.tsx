import Square from "./Square";
import confetti from "canvas-confetti";
function GameOverModal({
	winner,
	onRestart,
}: {
	winner: string | null;
	onRestart: () => void;
}) {
	if (winner) {
		confetti();
	}

	const winnerText = winner ? `Winner` : "It's a draw";
	return (
		<section className="winner">
			<div className="text">
				<h2>{winnerText}</h2>
				<header className="win">{winner && <Square>{winner}</Square>}</header>
				<footer>
					<button onClick={onRestart}>Play Again</button>
				</footer>
			</div>
		</section>
	);
}

export default GameOverModal;
