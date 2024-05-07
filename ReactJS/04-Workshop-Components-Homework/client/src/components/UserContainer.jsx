import Search from "./Search";
import UserListTable from "./UserListTable";


const UserContainer = () => {

    return (
        <section className="card users-container">
            <Search />

            <UserListTable />


        </section>

    );
};

export default UserContainer;