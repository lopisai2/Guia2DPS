import React from 'react'

const Todo = ({todo3,index , deleteTodo}) => {
return (
    <>    
    <div className="list">
    <h3>{todo3}</h3> <button className="btn-delete" onClick={()=>deleteTodo(index)}>x</button>
    </div>  
    </>
)
}
export default Todo 