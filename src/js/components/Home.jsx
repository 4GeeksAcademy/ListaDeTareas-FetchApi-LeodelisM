import React from "react";

import TodoList from "./TodoList";

//create your first component
const Home = () => {

	return (
		<div className="container mx-auto">
			<header>
				<h1>Todo List :)</h1>
			</header>
			<TodoList/>
		</div>
	);
};

export default Home;