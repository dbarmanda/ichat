import React from 'react'
import { Avatar } from '@mui/material';
import "./message.css"

function Message(props) {
    const {id, contents} = props;
    
    
    return (
        <div className="message">
            <Avatar />
            <p>a message here...</p>
            <small>timestamp</small>
        </div>
    )
}

export default Message
