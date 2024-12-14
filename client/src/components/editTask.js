import React,{Fragment, useState} from 'react'

export const EditTask = ({task})=>{
//edit Text function

const editText = async (id) =>{
    try {
        const body = {description}

       const res = await fetch(`http://localhost:5000/tasks/${id}`, {
           method: "PUT",
           headers: {"Content-type": "application/json"},
           body: JSON.stringify(body)
       } )
      window.location ="/"
    } catch (err) {
        console.error(err.message)
    }
}

  
const [description, setDescription] = useState(task.description)

    return (
        <Fragment>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${task.task_id}`}>
  Edit
</button>


<div class="modal fade" id={`id${task.task_id}`}>
  <div class="modal-dialog" onClick={()=>setDescription(task.description)}>
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Task</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setDescription(task.description)}>&times;</button>
      </div>

      
      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={e=>setDescription(e.target.value)}/>
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal"  onClick={()=> editText(task.task_id)}>Submit</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )

}