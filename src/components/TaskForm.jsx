import React from 'react';
import '../stylesheets/TaskForm.css'

function TaskForm(props) {

	const handleForm = e => {
		const newTask = {
			id: '34545',
			
		}
	}

	return (
		<form className='task-form'>
			<input 
				className='task-input'
				type='text' 
				placeholder='Write a Task'
				name='text'
			/>
			<button
				className='task-button'
			>
				Add Task
			</button>

		</form>
	);
}

export default TaskForm;