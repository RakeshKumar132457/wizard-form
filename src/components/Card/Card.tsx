import { useState } from "react";
import "./Card.css";

function Card(props: any) {
	const [displayItem, setDisplayItem] = useState(false);

	function handleShowItem() {
		setDisplayItem((prev) => !prev);
	}

	let toggleClass = displayItem ? "card__display" : "card__hidden";

	return (
		<div className='card' id={props.id}>
			<button
				className='btn btn__delete'
				onClick={(e) => {
					props.handleDelete(e, props.id);
				}}
			>
				X
			</button>
			<h2 className='card__name'>{props.name}</h2>
			<h2 className='card__email'>{props.email}</h2>
			<div className={toggleClass}>
				<h2 className='card__phone'>{props.phone}</h2>
				<h2 className='card__address'>{props.address}</h2>
			</div>
			<button className='btn btn__show' onClick={handleShowItem}>
				Show
			</button>
		</div>
	);
}

export default Card;
