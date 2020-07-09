import React from 'react'
import './styles.css'

const Block = () => (
    <div className="block-wrapper">
        <p className="block-title">First time here?</p>
        <div className="block-createacc">
            <p>Don't have a Habbo yet?
            <br />
            <a href="#" className="link-createacc">You can create one here</a>
            </p>
        </div>
    </div>
)

export default Block