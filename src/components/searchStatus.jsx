import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
    const phrase = (num) => {
        if (num === 0) {
            return 'Никого не нашлось для тебя'
        }
        if (num === 1) {
            return ' человек готов встретиться c тобой'
        }
        if (num >= 2 && num <= 4) {
            return ' человека готовы встретиться c тобой'
        }
        if (num >= 5 && num <= 15) {
            return ' человек готовы встретиться с тобой'
        }
    }

    return (
        <div>
            <h2 className="d-flex justify-content-between col-">
                <span className="badge bg-info text-dark">
                    {length === 0 ? phrase(length) : length + phrase(length)}
                </span>
                <i className="bi bi-moon btn btn-secondary nt-2"></i>
            </h2>
        </div>
    )
}
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
}

export default SearchStatus
