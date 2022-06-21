import React from "react";

const Form = ({setInputText, Todos, setTodos, inputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodosHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...Todos,
            {text: inputText, completed: false,id: Math.random() *1000 }    
        ]);
        setInputText("");
        
    }

    return (
        <div className="container">
            {/* <!------ main ------> */}
        <main>

        <form className="inp">
            <input value={inputText} onChange={inputTextHandler} type="text" className="addtext" />
            <button onClick={submitTodosHandler} className="btnadd" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select name="Todos" className="filter">
                   <option value="all">All</option>
                   <option value="completed">Completed</option>
                   <option value="uncompleted">Inprogress</option>
                </select>
            </div>

        {/* <!------ form ------> */}
        </form>

        
        </main>

    </div>
    );
};

export default Form;