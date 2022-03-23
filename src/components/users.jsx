import React, { useState } from 'react'
import Pagination from './pagination'
import 'bootstrap/dist/css/bootstrap.css'
import User from './user'
import PropTypes from 'prop-types'

const Users = ({ users: allUsers, ...rest }) => {
    const count = allUsers.length
    const pageSize = 4

    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize
        return [...items].splice(startIndex, pageSize)
    }

    const userCrop = paginate(allUsers, currentPage, pageSize)

    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встречи</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {userCrop.map((user) => (
                        <User
                            {...user}
                            {...rest}
                            key={user._id}
                            name={user.name}
                            qualities={user.qualities}
                            profession={user.profession.name}
                            completedMeetings={user.completedMeetings}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
