import React, { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

	const [input, setInput] = useState('');

	const handleChange = e => {
		console.log('writting...')
		setInput(e.target.value); /* extract value from text */
	};

	const handleSubmitForm = e => {
		// to avoid a complete reload 
		e.preventDefault();
		console.log('Sending form')
		const newTask = {
			id: uuidv4(),
			texto:input,
			complete : false
			
		}
		console.log(newTask);
		props.onSubmit(newTask);
	};

	return (
		<form 
			className='task-form' 
			onSubmit={handleSubmitForm}>
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