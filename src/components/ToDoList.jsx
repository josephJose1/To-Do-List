import React from "react";
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function ToDoList(){
	return (
		<>
		{/* we don't want to add more divs */}
			<TaskForm/>
			<div className="container-task-list">
				{
					
				}

			</div>
		</>
	);
};