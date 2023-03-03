import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Task({texto, complete }){
	return (
		<div  className={complete ? 'container-task complete' : 'container-task'}
			// className={`container-task ${complete ? 'complete':''}`} another way
		>

			<div className="text-task">
				{texto}				

			</div>
			<div className="container-icons-task">
				<AiOutlineCloseCircle className='icon-task'/>
			</div>

		</div>
	);
}

export default Task;