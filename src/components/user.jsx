import React from 'react'
import Quality from './quality'
import PropTypes from 'prop-types'
import BookMark from './bookMark'

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    onToggleBookMark,
    bookmark
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((key) => (
                    <Quality color={key.color} name={key.name} key={key._id} />
                    // return <span className={"badge bg-" + key.color + " mx-1"}>{key.name}</span>
                ))}
            </td>
            <td>{profession}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-outline-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    bookmark: PropTypes.bool
}

export default User
