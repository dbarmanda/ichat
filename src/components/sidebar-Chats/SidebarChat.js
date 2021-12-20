import { Avatar } from '@mui/material'
import "./sidebarchat.css"
import React from 'react'
import { useDispatch } from 'react-redux';
import { setChat } from '../../features/chatSlice'

function SidebarChat(props) {
    const {id, chatName} = props;

    const dispatch = useDispatch();

    const displayChat = ()=>{
        dispatch(
            setChat({
                chatId: id,
                chatName: chatName
            })
        )
        //this is Important!!!
        //--> it just sets the chat(when you click on a chat menu...(in sidebar))
    }
    return (
        <div onClick={displayChat} className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>Lorem ipsum dolor, sit  elit. Magnam?</p>
                <small>time</small>
            </div>
        </div>
    )
}

export default SidebarChat

