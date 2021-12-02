import React from 'react'

function Addtodo({val,change,newtask}) {
    
    return (
        <div>
            <input value={val} onChange={change} />
         
         <button onClick={newtask}>add task</button>
        </div>
    )
}

export default Addtodo
