import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material';
import "./message.css"

import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

export const Message = forwardRef(
    (
        {id, sender, message, timestamp},
        ref
    ) => {
        const user = useSelector(selectUser)
    return (
        <div ref={ref} className={`message ${user.email === sender.email && "message_sender"}`}>
        <Avatar className="message_photo" src={sender.photo} />
        <p>{message}</p>
        {/* <small>{new Date(timestamp?.toDate()).toLocaleString()}</small> */}

        <small>{new Date(parseInt(timestamp)).toGMTString()}</small>
    </div>
    )
}
);
