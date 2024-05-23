import { useId } from "react";

function Select({ onSelect, items }) {
	const categoryId = useId();
	return (
		<div>
			<label>Categoría</label>
			<select
				onChange={(event) => onSelect(event.target.value)}
				id={categoryId}
			>
				<option value="all" defaultChecked>
					All
				</option>
				{items &&
					items.map((item) => (
						<option key={item} value={item}>
							{item.slice(0, 1).toUpperCase() + item.slice(1)}
						</option>
					))}
			</select>
		</div>
	);
}

export default Select;
