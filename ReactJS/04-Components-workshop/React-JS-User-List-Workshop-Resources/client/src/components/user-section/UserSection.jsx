import Search from "../search/Search";
import UserList from "./user-list/UserList";

export default function UserSection() {


    return (

        <section className="card users-container">

            <Search />

            <UserList />
        </section >
    );
}