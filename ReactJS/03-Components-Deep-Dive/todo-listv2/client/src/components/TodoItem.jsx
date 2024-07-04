export default function TodoItem({
    text,
    _id,
    isCompleted,
    onStatusChangeHandler
}) {

    const onStatusClickHandler = () => {
        onStatusChangeHandler(_id);
    };


    return (
        <tr className={`todo ${isCompleted ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={onStatusClickHandler} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}