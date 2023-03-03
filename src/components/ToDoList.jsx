import React, { useState } from "react";
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function ToDoList(){

	const [tareas, setTareas] = useState([]);

	const addTask = task => {
		console.log('Task added');
		console.log(task);
	};

	return (
		<>
		{/* we don't want to add more divs */}
			<TaskForm/>
			<div className="container-task-list">
				{
					tareas.map((tarea) =>
						<Task
							texto = {tarea.texto}
							complete = {tarea.complete}
						/>

					)
				}

			</div>
		</>
	);
};