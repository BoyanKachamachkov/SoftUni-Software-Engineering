export default function Button({
    onClick,
}) {


    const addUserHandler = () => {
        onClick()
    }

    return (
        <button className="btn-add btn" onClick={addUserHandler}>Add new user</button>

    );

}