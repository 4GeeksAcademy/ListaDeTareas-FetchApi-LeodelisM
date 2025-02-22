import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import TodoList from "./TodoList";

//create your first component
const Home = () => {

	return (
		<div className="container mt-5">
				<h1 className= "col-md-6 mb-3 m-auto">
					Mi Lista de Tareas  
					<AiFillCheckSquare 
						className="text-success"
						size={50}
						/> 
				</h1>
			<TodoList/>
		</div>
	);
};

export default Home;