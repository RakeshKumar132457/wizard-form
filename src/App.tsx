import "./App.css";
import Cards from "./components/Cards/Cards";
import { useState } from "react";
import CreateUser from "./components/CreateUser/CreateUser";
import { data } from "./assets/dummy-data";

function App() {
	const [personData, setPersonaData] = useState(data);

	function handleDelete(e: Event, id: number) {
		setPersonaData((prev) => {
			return prev.filter((d) => id !== d.id);
		});
	}

	function handleSubmit(e: Event) {
		let id = personData.length;
		e.preventDefault();
		let newObj = {};
		newObj.id = id;
		newObj.name = e.target[0].value;
		newObj.email = e.target[1].value;
		newObj.phone = e.target[2].value;
		newObj.address = e.target[3].value;

		setPersonaData((prev) => {
			return [...prev, newObj];
		});
	}

	return (
		<div>
			<CreateUser handleSubmit={handleSubmit} />
			<Cards personData={personData} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
