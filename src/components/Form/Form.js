import React from 'react'
import './styles.css'

const Form = () => (
    <div className="form-wrapper">
        <p className="form-title">First time here?</p>
        <div className="form-createacc">
            <label htmlFor="username">Name of your Habbo</label>
            <input type="text" name="username"></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
            <button>OK</button>
        </div>
        <a href="#" className="forgot-password">Forgotten your password?</a>
    </div>
)

export default Form