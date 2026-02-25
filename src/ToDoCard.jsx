import React from "react";
import { useEffect, useState } from "react";
import { getTodos } from './todoService.js'


const ToDoCard = () => {
    const [toDoData, setTodoData] = useState([])

    const fetchData = async () => {
        const response = await getTodos();
            setTodoData(response)        
        }
        let hasData = toDoData.length > 0;
    
        useEffect( ()=> {

        fetchData();
    },[])



    return (
            <>
                    <h3>My Todos</h3>
            {hasData ? (
                <div className="card-container">
                    <div className="grid-header">Task</div>
                    <div className="grid-header">Status</div>
                        {toDoData.map(task => (
                            <React.Fragment key={task.id}>
                                <div className="task-item">{task.todo}</div>
                                <div className="buttons">
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>

                                </div>
                                <div className={task.completed ? 'done' : 'pending'}>{task.completed ? 'Completed': 'Incomplete'}</div> 
                            </React.Fragment>
                        ))}
                    
                     
                </div> 
                )
             : (<div>Loading Todos....</div>)}
            
            </>
    )

}

export default ToDoCard;