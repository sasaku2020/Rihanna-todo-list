import React from "react";
import Todo from "./Todo";

const ToDoList = ({Todos, setTodos}) => {
    return (
        <div className="container">
            <section className="listing">
            <ul className="listul">
            {Todos.map((todo)  => (
                  <Todo todo={todo} key={todo.id} text={todo.text} setTodos={setTodos} Todos={Todos}/>
            ))}
               

            </ul>
            </section>
    </div>
    );
};

export default ToDoList;
