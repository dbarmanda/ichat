import React from 'react'
import "./imessage.css";
import Sidebar from '../sidebar/Sidebar'
import Chat from '../chat/Chat';
 
export default function Imessage() {
    return (
        <div className="imessage">
            {/* Sidebar  */}
            <Sidebar/>
            {/* Chat  */}
            <Chat/>
        </div>
    )
}
