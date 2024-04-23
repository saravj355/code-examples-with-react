import { POSSIBLE_WINS } from "./constants";

export default function calculateWinner(board: Array<string | null>) {
	for (const possibleWin of POSSIBLE_WINS) {
		const [win1, win2, win3] = possibleWin;
		if (
			board[win1] !== null &&
			board[win1] === board[win2] &&
			board[win1] === board[win3]
		) {
			return board[win1];
		}
	}

	return null;
}
