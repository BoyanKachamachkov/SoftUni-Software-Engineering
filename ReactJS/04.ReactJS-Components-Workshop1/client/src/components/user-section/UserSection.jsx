import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [search, setSearch] = useState('');


    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const userResult = Object.values(result);
                setUsers(userResult);
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    };

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    };

    const addUserSaveHandler = async (e) => {
        // prevent refresh
        e.preventDefault();

        // get user data
        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // make post request
        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const createdUser = await response.json();

        // update local state
        setUsers(oldUsers => [...oldUsers, createdUser]);

        // close modal
        setShowAddUser(false);
    };

    const userDetailsClickHandler = (userId) => {
        setShowUserDetailsById(userId);
    };

    const userDeleteClickHandler = (userId) => {
        setShowUserDeleteById(userId);
    };

    const userDeleteHandler = async (userId) => {
        // Delete request to server
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE',
        });

        // delete from local state
        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));

        // close modal
        setShowUserDeleteById(null);
    };

    const handleUserSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <section className="card users-container">
            <Search onUserSearchInput={handleUserSearch} />

            <UserList
                users={users.filter(user => search === '' ? user :
                    user.firstName.includes(search) ||
                    user.lastName.includes(search) ||
                    user.email.includes(search) ||
                    user.phoneNumber.includes(search))}
                isLoading={isLoading}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler}
                />
            )}

            {showUserDetailsById && (
                <UserDetails
                    user={users.find(user => user._id === showUserDetailsById)}
                    onClose={() => setShowUserDetailsById(null)}
                />
            )}

            {showUserDeleteById && (
                <UserDelete
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button >

            <Pagination />
        </section >
    );
}
