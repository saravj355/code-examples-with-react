import { useState } from "react";
import Square from "./Square";
import GameOverModal from "./GameOverModal";
import { INITIAL_BOARD, TURNS } from "../utils/constants";
import calculateWinner from "../utils/CalculateWinner";
import { getData, removeData, saveData } from "../utils/LocalStorage";

const KEY = "board";
export function BoardGame() {
	const [currentBoard, setCurrentBoard] = useState(() => {
		const board = getData(KEY);
		return board ? JSON.parse(board) : INITIAL_BOARD;
	});

	const winner: string | null = calculateWinner(currentBoard.board);
	const isDraw =
		!winner && currentBoard.board.every((square: string) => square !== null);
	const isGameOver = winner || isDraw;

	function onClickSquare(index: number) {
		if (winner || currentBoard.board[index]) return;

		setCurrentBoard((prevBoard: Board) => {
			const newBoard = structuredClone(prevBoard);

			newBoard.board[index] = prevBoard.turn;
			newBoard.turn = prevBoard.turn === TURNS.X ? TURNS.O : TURNS.X;
			saveData(KEY, JSON.stringify(newBoard));
			return newBoard;
		});
	}

	function handleRestartGame() {
		setCurrentBoard(INITIAL_BOARD);
		removeData(KEY);
	}

	return (
		<>
			<button onClick={handleRestartGame}>Restart Game</button>
			<section className="turn">
				<Square isSelected={!winner && currentBoard.turn === TURNS.X}>
					{TURNS.X}
				</Square>
				<Square isSelected={!winner && currentBoard.turn === TURNS.O}>
					{TURNS.O}
				</Square>
			</section>
			<section className="game">
				{currentBoard.board.map((square: string, index: number) => (
					<Square key={index} onClick={() => onClickSquare(index)}>
						{square}
					</Square>
				))}
			</section>
			{isGameOver && (
				<GameOverModal winner={winner} onRestart={handleRestartGame} />
			)}
		</>
	);
}

export default BoardGame;
