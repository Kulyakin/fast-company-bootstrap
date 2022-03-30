import React, { useState } from 'react'
import api from '../api'
import Users from './users'

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())
    console.log(users.length)
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
        console.log(id)
    }
    return (
        <div>
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    )
}

export default App
