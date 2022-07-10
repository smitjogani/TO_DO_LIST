import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {

  let myStyle = {
    minHeight : "65vh",
    margin : "37px auto"
  }

  let border = {
    border : "1px solid black"
  }

  return (
    <div className="container">
      
      <hr style={border}/>

      <h3 className="my-3">Todos List</h3>

      <hr style={border}/>
      

      {props.todos.length === 0
        ? "No Todos To Display 📪" : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}  />              
            );
          })
          }
    </div>
  );
};
