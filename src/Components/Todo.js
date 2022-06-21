import React from "react";

const Todo = ({ text,todo, Todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(Todos.filter(el  => el.id !== todo.id))
    };

    const checkHandler = () => {
        setTodos(Todos.map(item => {if(item.id === todo.id){return {...item, completed: !item.completed}
    }
    return item;
    })
    );
    };

    return (
        <div className="container">
                 
            <div className="lidiv">
                <li className={`liitem ${todo.completed ? "compstatus" : ""}`}>{text}</li>
                <button onClick={deleteHandler} className="btndel"><i className="fa-solid fa-trash"></i></button>
                <button onClick={checkHandler} className="btncom"><i className="fas fa-check"></i></button>
            </div>

        </div>
    );
};

export default Todo;