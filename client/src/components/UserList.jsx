import Search from "./Search"
import UserListTable from './UserListTable';

const UserList = () => {
    return (
        <section className="card users-container">
            <Search />
            
            <UserListTable />
            <button class="btn-add btn">Add new user</button>
        </section>

    )
};

export default UserList