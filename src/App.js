import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus"
import api from "./api"
import "bootstrap/dist/css/bootstrap.css"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers((users) => users.filter(user => user._id !== userId));
    };
    const handleToggleBookMark = (status) => {
        console.log(status);
    };
    return (
        <>
            <SearchStatus length={users.length}/>
            {users.length > 0 && (
                <Users onDelete={handleDelete} onBookMark={handleToggleBookMark} users={users} />
            )}
        </>
    )
};

export default App;