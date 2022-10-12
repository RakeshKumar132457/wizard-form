import Card from "../Card/Card";
import "./Cards.css";
import { useState } from "react";

function Cards(props: any) {
	const cards = props.personData.map((d: any, i: number) => {
		return (
			<Card
				key={i}
				id={d.id}
				name={d.name}
				email={d.email}
				phone={d.phone}
				address={d.address}
				handleDelete={props.handleDelete}
			/>
		);
	});
	return <div className='card__container'>{cards}</div>;
}

export default Cards;
