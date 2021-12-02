import React from 'react'

function Todo({list,del,done}) {

    
    return (
        <div>
           {list.map((todo,i)=><li id={todo.isShown?"Appp":""} key={i}>
           
           {todo.action} 
           
           <button onClick={()=>del(i)}>Delete</button> 

           <button onClick={()=>done(todo.id)}>Done</button> 
         
         </li>)}
        </div>
    )
}

export default Todo

