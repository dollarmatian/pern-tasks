import React, {Fragment, useState} from 'react'


export const InputTask = () => {
    const [description, setDescription] = useState("")

    
const onSubmitForm = async e =>{
    e.preventDefault()
    try {
        const body = {description}
        const response = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)

           
        })

        window.location = "/"
    } catch (err) {
        console.error(err.message)
    }
}

    return (
    <Fragment>
        <h1 className="text-center my-5">Enter a Task</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
            <input type="text" name="" className="form-control" placeholder="Task Description" value={description} onChange={e=>setDescription(e.target.value)}/>
            <button  className="btn btn-success">Add</button>
        </form>
    </Fragment>
        )

}

