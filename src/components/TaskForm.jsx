import React, { useState } from 'react';
import '../stylesheets/TaskForm.css'

function TaskForm(props) {

	const [input, setInput] = useState('');

	const handleChange = e => {
		console.log('writting...')
	}

	const handleForm = e => {
		const newTask = {
			id: '34545',
			texto:'hola'
			
		}
	}

	return (
		<form className='task-form'>
			<input 
				className='task-input'
				type='text' 
				placeholder='Write a Task'
				name='text'
				onChange={handleChange}
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