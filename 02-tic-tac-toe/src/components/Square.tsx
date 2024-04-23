type Square = {
	onClick?: () => void;
	children: React.ReactNode;
	isSelected?: boolean;
};

function Square({ children, onClick, isSelected }: Square) {
	return (
		<div
			className={`square ${isSelected ? "is-selected" : ""}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

export default Square;
