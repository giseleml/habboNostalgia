import React from 'react'
import './styles.css'
import arrow from '../../../../assets/arrow.svg'

const Button = () => (
    <button className="go-btn">
        Go
        <span className="single-arrow">
            <img src={arrow} />
        </span>
    </button>
)

export default Button