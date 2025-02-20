import React from "react";

import TodoList from "./TodoList";

//create your first component
const Home = () => {

	return (
		<div className="container mt-5">
				<h1 className= "mb-4 text-primary">Lista de Tareas =)</h1>
			<TodoList/>
		</div>
	);
};

export default Home;