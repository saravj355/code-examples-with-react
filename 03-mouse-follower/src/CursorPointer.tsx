import { useEffect, useState } from "react";

function CursorPointer() {
	const [enabled, setEnabled] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	function handleEnable() {
		setEnabled((prev) => !prev);
	}

	useEffect(() => {
		if (!enabled) {
			return;
		}

		const handlePointerMove = (event: PointerEvent) => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
		};
	}, [enabled]);

	return (
		<>
			<div
				style={{
					position: "absolute",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					border: "1px solid #fff",
					borderRadius: "50%",
					opacity: 0.8,
					pointerEvents: "none",
					left: -25,
					top: -25,
					width: 50,
					height: 50,
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
			<button onClick={handleEnable}>
				{enabled ? "Desactivar" : "Activar"} puntero
			</button>
		</>
	);
}

export default CursorPointer;
