import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import '../stylesheets/ToDoList.css'

function ToDoList(){

	const [tasks, setTask] = useState([]);

	const addTask = task => {
		if(task.texto.trim()){//verify
			task.texto = task.texto.trim();//unnesesary spaces
			const tasksUpdate = [task, ...tasks]// add to the beginning
			setTask(tasksUpdate);//done
		}
	};

	const deleteTask = id => {
		const tasksUpdate = tasks.filter(task => task.id !== id);
		setTask (tasksUpdate);//done
	};

	const completeTask = id => {
		const tasksUpdate = tasks.map(task => {
			if(task.id === id){
				task.complete = !task.complete;
			}
			return task;
		});
		setTask(tasksUpdate);	//we don'tuses array method bause we need to use se
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
							completeTask = {completeTask}
							deleteTask = {deleteTask}
							//time min 6:54
						/>

					)
				}

			</div>
		</>
	);
};


export default ToDoList;