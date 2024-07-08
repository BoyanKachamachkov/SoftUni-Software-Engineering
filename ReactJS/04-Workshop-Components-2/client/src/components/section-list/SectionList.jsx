import { useState, useEffect } from "react";
import Button from "../button/Button";
import Pagination from "../pagination/Pagination";
import Table from "./table/Table";

const baseUrl = 'http://localhost:3030/jsonstore';

export default function SectionList() {

    const [users, setUsers] = useState([]);


    useEffect(() => {

        (async function getUsers() {
            const response = await fetch(`${baseUrl}/users`);
            const users = await response.json();
            console.log(Object.values(users));

            setUsers(Object.values(users))

        })();

    }, []);

    return (
        <section className="card users-container">

            <Table />


            <Button />
            <Pagination />
        </section>

    );
}