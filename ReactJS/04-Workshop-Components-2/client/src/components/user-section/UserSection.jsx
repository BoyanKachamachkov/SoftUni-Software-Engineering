import { useState, useEffect } from "react";
import Button from "../button/Button";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {

    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const [users, setUsers] = useState([]);


    useEffect(() => {

        (async function getUsers() {
            const response = await fetch(`${baseUrl}/users`);
            const users = await response.json();
            console.log(Object.values(users));

            setUsers(Object.values(users));

        })();

    }, []);

    const onCreateUserClick = () => {
        setShowCreateUserModal(true);
    };

    const createUserHandler = async (e) => {
        e.preventDefault();


        // get data from form
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        // make post
        const response = await fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'Application-json'
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();
        console.log(createdUser);

        // update local state
        setUsers(oldUsers => [...oldUsers, createdUser]);

        // close modal
        setShowCreateUserModal(false);
    };

    return (
        <section className="card users-container">

            <UserList users={users} />

            {showCreateUserModal && (
                <UserAdd
                    onClose={() => setShowCreateUserModal(false)}
                    onSave={createUserHandler}

                />
            )}


            <Button
                onClick={onCreateUserClick}
                onClose={() => setShowCreateUserModal(false)}
            />
            <Pagination />
        </section>

    );
}