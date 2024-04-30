import { useEffect, useState } from "react";
import TodoItem from "./Todo";

export default function TodoList(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data));
            })
            .catch(err => console.log(err));
    }, []);


    const changeStatusHandler = (todoId) => {

        // взимаме определеното туду, което е натиснато
        // създаваме му нова референция с плитко копие и спред
        // създаваме обект, защото и оригиналното туду е обект, но му сменяме 1-но пропърти
        // проверяваме дали ИД-тата са еднакви
        // ако са - обръщаме СТОЙНОСТТА на пропъртито "isCompleted" наобратно
        // ако не са - не пипаме статуса и го връщаме
        setTodos(state => state.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));

    };




    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">

                {/* <div className="loading-container">
            <div className="loading-spinner">
                <span className="loading-spinner-text">Loading</span>
            </div>
        </div> */}

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
                                _id={todo._id}
                                key={todo._id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                                changeStatusHandler={changeStatusHandler}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}