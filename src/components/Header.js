import PropTypes from "prop-types"
import Button from './Button'

import React from 'react'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.prpTypes = {
    title: PropTypes.string.isRequired
}

export default Header
