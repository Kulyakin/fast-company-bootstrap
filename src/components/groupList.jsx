import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items }) => {
    console.log(items)
    return (
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    )
}
GroupList.propTypes = {
    items: PropTypes.object.isRequired
}

export default GroupList
