import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import LoadingSpinner from "../../../../todo-list/client/src/components/LoadingSpinner";

const TodoList = function () {
    const [todos, setTodos] = useState([]);
    const [spinner, setSpinner] = useState(true);


    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data));
                setSpinner(false);
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
            {spinner ? <LoadingSpinner /> : ''}

            <div className="table-wrapper">
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