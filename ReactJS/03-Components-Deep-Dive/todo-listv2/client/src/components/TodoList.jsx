import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = function () {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data));
            })
            .catch(err => console.log(err));
    }, []);

    console.log(todos);

    const onStatusChangeHandler = (todoId) => {

        console.log(todoId);
        setTodos(state => state.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));

    };


    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">

                {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                {/* <div className="loading-container">
                    <div className="loading-spinner">
                        <span className="loading-spinner-text">Loading</span>
                    </div>
                </div> */}

                {/* <!-- Todo list table --> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {todos.map(todo => (
                            <TodoItem
                                key={todo._id}
                                text={todo.text}
                                _id={todo._id}
                                isCompleted={todo.isCompleted}
                                onStatusChangeHandler={onStatusChangeHandler}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TodoList;