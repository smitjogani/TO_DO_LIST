import React from 'react'

export const TodoItem = ({todo, onDelete}) => {

  let border = {
    border : "2px solid lightgray",
    margin : "5px",
    padding : "0px 27px 0px 27px",
  }
  return (
    <div style={border}>
        <br/>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <hr/>
        <button className='btn btn-sm btn-danger' onClick = { () => {onDelete(todo)}}>Delete</button>
        <hr/>
    </div>
  )
}
