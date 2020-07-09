import React from 'react';
import Button from '../Button/button'

import './styles.css' 

const Panel = () => (
    <div className="panel-wrapper">
        <h4>Hotel Navigator</h4>
        <div className="room-types">
            <div className="room-type-public">
                <h5>Public Spaces</h5>
            </div>
            <div className="room-type-personal">
                <h5>Rooms</h5>
            </div>
        </div>
        <div className="room-list-wrapper">
            <h6>Public Rooms</h6>
            <h6 id="hide-full-rooms">Hide Full Rooms</h6>
            <div className="room-list">
                <div className="room-list-go">
                    <p>Welcome Lounge</p>
                    <Button />
                    <p>Theatredome</p>
                    <Button />
                    <p>Library</p>
                    <Button />
                </div>
            </div>
        </div>
    </div>
)

export default Panel