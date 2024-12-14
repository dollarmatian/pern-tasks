import React, {Fragment} from 'react'
import {InputTask} from "./components/inputTask"
import {ListTasks} from "./components/listTasks"

import './App.css';

function App() {
  return (
 
<Fragment>
  <div className="container">
    <InputTask />
    <ListTasks />
  </div>
</Fragment>
   
  )
}

export default App
