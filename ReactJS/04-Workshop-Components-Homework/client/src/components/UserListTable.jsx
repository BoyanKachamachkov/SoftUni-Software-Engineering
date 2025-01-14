import CreateUserModal from "./CreateUserModal";
import UserListRow from "./UserListRow";
import * as userService from '../services/userServices';
import UserDeleteModal from "./UserDeleteModal";

import { useEffect, useState } from "react";
import UserInfoModal from "./UserInfoModal";


const UserListTable = () => {

    const [users, setUsers] = useState([]);
    const [showCreateModal, setCreateModal] = useState(false); //отначало не показваме
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDelete, setShowDelete] = useState(false);


    useEffect(() => {

        userService.getAll()
            .then(result => setUsers(result))
            // handle errors here (we can show something to the user)
            .catch(err => console.log(err));

    }, []);


    const createUserClickHandler = () => {
        // не ме интересува дали е показано или не, започни да го показваш
        setCreateModal(true);

    };


    const hideCreateUserModal = () => {
        setCreateModal(false);
    };

    const userCreateHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const result = await userService.create(data);

        // hide modal, no longer needed
        setCreateModal(false);

        // update users state by adding new user
        setUsers(users => [...users, result]);

    };

    const userInfoClickHandler = async (userId) => {

        setSelectedUser(userId);
        setShowInfoModal(true);
    };

    const deleteUserHandler = async () => {

        // delete user at server
        await userService.remove(selectedUser);

        // Remove from state
        setUsers(state => state.filter(user => user._id !== selectedUser));

        setShowDelete(false);


    };

    const deleteUserClickHandler = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);

    };


    return (

        <div className="table-wrapper">

            {showCreateModal && (
                <CreateUserModal
                    onClose={hideCreateUserModal}
                    onCreate={userCreateHandler}

                />
            )}


            {showInfoModal && <UserInfoModal
                onClose={() => setShowInfoModal(false)}
                userId={selectedUser}
            />}

            {showDelete && <UserDeleteModal
                onClose={() => setShowDelete(false)}
                onDelete={deleteUserHandler}

            />}


            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {/* <UserListRow /> */}

                    {users.map(user => (
                        <UserListRow
                            {...user}
                            key={user._id}
                            onInfoClick={userInfoClickHandler}
                            onDeleteClick={deleteUserClickHandler}
                        />
                    ))}

                </tbody>
            </table>
            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>


        </div>
    );

};

export default UserListTable;