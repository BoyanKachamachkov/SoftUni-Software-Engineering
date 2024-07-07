import { useState, useEffect } from "react";
import Search from "../search/Search";
import UserList from "./user-list/UserList";
import Pagination from "../pagination/Pagination";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = 'http://localhost:3030/jsonstore';


export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserById, setShowUserById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);

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
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

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

    const userDetailsClickHandler = (id) => {
        setShowUserById(id);
    };

    const userDeleteClickHandler = (id) => {
        setShowUserDeleteById(id);

    };

    const userDeleteHandler = async (id) => {
        // delete request to server
        const response = await fetch(`${baseUrl}/users/${id}`, {
            method: 'DELETE'
        });
        // delete from local state
        setUsers(oldUsers => oldUsers.filter(u => u._id !== id));

        // close modal
        setShowUserDeleteById(null);
    };

    return (

        <section className="card users-container">

            <Search />

            <UserList
                users={users}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler}
                />
            )}

            {showUserById && (

                <UserDetails
                    user={users.find(u => u._id === showUserById)}
                    onClose={() => setShowUserById(null)}
                />

            )}

            {showUserDeleteById && (

                <UserDelete
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}

                />
            )}

            <button className="btn-add btn" onClick={addUserClickHadler}>Add new user</button>

            <Pagination />
        </section >
    );
}