import React, {useState} from 'react'
import Todo from '../components/Todo'

const Form = () => 
{
    const [todo, setTodo]=useState({})
    const [todo2, setTodo2]=useState({})
    const [todo3, setTodo3]=useState({})    
    const [todos, setTodos]=useState
    (
        [
       
        ]
    )    
    
    
//Constantes 
    const handleChange = e=> 
    {
        setTodo({[e.target.name]:e.target.value})
        setTodo3({["todo3"]:(Object.values(todo2)+"-"+Object.values(todo))})                                      
    }       
    const handleChange2 = e=> 
    {
        setTodo2({[e.target.name]:e.target.value})    
        setTodo3({["todo3"]:(Object.values(todo2)+"-"+Object.values(todo))})                                
    }               

    const handleClick= e=> {
        if((Object.keys(todo).length===0 ||  todo.todo.trim()==='') || (Object.keys(todo2).length===0 || todo2.todo2.trim()==='' ))    
        {       
            alert('el campo no puede estar vacío')
            return      
        }        
        setTodo3({["todo3"]:(Object.values(todo2)+"- "+Object.values(todo))})                                
        setTodos([...todos,todo3])                
    }
    const deleteTodo= indice=>{
        const newTodos=[...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit={e=> e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name="todo" onChange={handleChange} /><br /> 
            <input type="text" name="todo2" onChange={handleChange2} /><br />              
            <button onClick={handleClick}>Agregar</button>
        </form>
        {            
            todos.map((value, index) => (<Todo todo3={value.todo3}  key={index} index={index} deleteTodo={deleteTodo}/>))
        } 
               
        </>
    )
}
export default Form
