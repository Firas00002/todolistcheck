

import './App.css';


import React, { Component } from 'react'
import Todo from './componenets/Todo';
import Addtodo from './componenets/Addtodo';

class App extends Component {
state={
  addtask:"",
  todos : [{ id: Math.random(), action: 'learn react hook',isShown:false },
    { id: Math.random(), action: 'learn react state' ,isShown:true},
    { id: Math.random(), action: 'learn react Router' ,isShown:false},
    { id: Math.random(), action: 'learn react Redux',isShown:true}]
}
  completetask=(i)=>{
const todos=[...this.state.todos];
todos.splice(i,1);
this.setState({
  todos
});
}
 newtask =()=>{
  const todos=[...this.state.todos];
  todos.push({
    action : this.state.addtask
  });
  this.setState({
    todos,
    addtask:""
  })

 }

 onchange=(event)=>{
  this.setState({
    addtask : event.target.value
  });
 }
  
Handledone=(i)=>{
this.setState({
  todos:this.state.todos.map((el)=>el.id===i?{...el,isShown:!el.isShown}:el)
})
}


  render() {
    

    return (
      <div className='App'>
        
         <Addtodo className='Appp' val={this.state.addtask} change={this.onchange} 
         newtask={this.newtask} />
         <Todo list={this.state.todos} del={this.completetask } done={this.Handledone}/>
      </div>
    )
  }
}

export default App
