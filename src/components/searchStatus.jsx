import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'

const TotalCompany = ({ length }) => {
    const frase = (num) => {
        if (num === 0) {
            return 'Никого не нашлось для тебя'
        } else return { length } + 'c тобой'
    }

    return (
        <div>
            <h2 className="d-flex justify-content-between col-">
                <span className="badge bg-info text-dark">{frase(length)}</span>
                <button>
                    <i className="bi bi-moon"></i>
                </button>
            </h2>
        </div>
    )
}
TotalCompany.propTypes = {
    length: PropTypes.number.isRequired
}

export default TotalCompany
