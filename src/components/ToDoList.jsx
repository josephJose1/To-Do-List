import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function ToDoList(){

	const [tasks, setTask] = useState([]);

	const addTask = task => {
		if(task.texto.trim()){//verify
			task.texto = task.texto.trim();//unnesesary spaces
			const tasksUpdate = [task, ... tasks]// add to the beginning
			setTask(tasksUpdate);//done
		}
	};

	return (
		<>
		{/* we don't want to add more divs */}
			<TaskForm onSubmit={addTask}/>
			<div className="container-task-list">
				{
					tasks.map((task) =>
						<Task
							key={task.id} //error avoid change item order
							id ={task.id} //key is not a probs //very common and necessary
							texto = {task.texto}
							complete = {task.complete}

							//time min 6:54
						/>

					)
				}

			</div>
		</>
	);
};


export default ToDoList;