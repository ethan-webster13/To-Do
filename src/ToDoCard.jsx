import React from "react";
import { useEffect, useState } from "react";
import { getTodos } from './todoService.js'


const ToDoCard = () => {
    const [toDoData, setTodoData] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])

    const fetchData = async () => {
        const response = await getTodos();
        setTodoData(response);  
       
    }
        
    let hasData = toDoData.length > 0;
     //Source of truth
        useEffect( ()=> {
            fetchData();            
        },[])
        
        useEffect(()=> {
            const filtered = toDoData.filter(todo =>
                todo.todo.toLowerCase().includes(query)
            )
            setResults(filtered)
        },[query,toDoData])
    
const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
}


    return (
            <>
                    <h3>My Todos</h3>
                    <input type="text" className="filter-todo"  onChange={handleInputChange}/>
            {hasData ? (
                <div className="card-container">
                    <div className="grid-header">Task</div>
                    <div className="grid-header">Status</div>
                        {results.map(task => (
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