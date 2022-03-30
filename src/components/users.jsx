import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import 'bootstrap/dist/css/bootstrap.css'
import User from './user'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const pageSize = 4
    // запросы без redux
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
        console.log('change')
    }, [selectedProf])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
        console.log(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize
        return [...items].splice(startIndex, pageSize)
    }

    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers
    /*
    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers
    */
    const count = filteredUsers.length

    const userCrop = paginate(filteredUsers, currentPage, pageSize)
    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <div className="d-flex">
            {professions && count > 0 && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <>
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary nt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />

                {count > 0 && (
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встречи</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
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
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}
Users.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Users
