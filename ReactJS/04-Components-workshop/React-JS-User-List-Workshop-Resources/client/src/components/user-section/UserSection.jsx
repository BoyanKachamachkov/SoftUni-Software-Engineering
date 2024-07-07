import { useState, useEffect } from "react";
import Search from "../search/Search";
import UserList from "./user-list/UserList";
import Pagination from "../pagination/Pagination";
import UserAdd from "./user-add/UserAdd";

const baseUrl = 'http://localhost:3030/jsonstore';


export default function UserSection() {
    const [users, setUsers] = useState([]);

    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const users = Object.values(result);

                setUsers(users);
            } catch (err) {
                alert(err.message);
            }

        })();
    }, []);

    const addUserClickHadler = () => {
        setShowAddUser(true);
    };

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    };

    const addUserSaveHandler = async (e) => {
        e.preventDefault();

        // get data
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        // make post
        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json',
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();
        console.log(createdUser);

        // update local state
        setUsers(oldUsers => [createdUser, ...oldUsers]);

        // close modal
        setShowAddUser(false);

    };

    return (

        <section className="card users-container">

            <Search />

            <UserList users={users} />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHadler}>Add new user</button>

            <Pagination />
        </section >
    );
}