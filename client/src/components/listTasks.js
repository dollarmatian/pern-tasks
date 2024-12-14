import React, {Fragment, useState, useEffect} from 'react'
import {EditTask} from "./editTask"


export const ListTasks=()=>{
const [tasks, setTasks] = useState([])

//delete task function
async function deleteTask(id){
    try {
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
            method: "DELETE"
        })
        setTasks(tasks.filter(task => task.task_id !== id))

    } catch (err) {
        console.error(err.message)
        
    }
}



async function getTasks(){
    const res = await fetch("http://localhost:5000/tasks")

    const taskArray = await res.json()

    setTasks(taskArray)
    
}

    useEffect(()=>{
        getTasks()
    },[])

console.log(tasks)

    return (
<Fragment>
    {" "}
    <table className="table mt-5">
    <thead>
        <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
    {tasks.map(task =>(
         <tr key={task.task_id}>
             <td>{task.description}</td>
             <td>
                 <EditTask task={task} />
             </td>
             <td>
                 <button className="btn btn-danger" onClick={()=> deleteTask(task.task_id)}>Delete</button> 
             </td>    
        </tr> 
        ))}
    </tbody>
    </table>
</Fragment>    )
}

