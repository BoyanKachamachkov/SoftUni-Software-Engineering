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

    return (
        <section className="card users-container">

            <UserList users={users} />

            {showCreateUserModal && (
                <UserAdd
                    onClose={() => setShowCreateUserModal(false)}

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