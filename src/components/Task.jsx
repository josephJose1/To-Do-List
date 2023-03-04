import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Task({id, texto, complete, completeTask, deleteTask }){

	return (
		<div  className={complete ? 'container-task complete' : 'container-task'}
			// className={`container-task ${complete ? 'complete':''}`} another way
		>

			<div 
				className='text-task'
				onClick={() => completeTask(id)}>
				{texto}				

			</div>
			<div 
				className='container-icons-task'
				onClick={() => deleteTask(id)}>
				<AiOutlineCloseCircle className='icon-task'/>
			</div>

		</div>
	);
}

export default Task;