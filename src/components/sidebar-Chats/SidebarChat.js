import { Avatar } from '@mui/material'
import "./sidebarchat.css"
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setChat } from '../../features/chatSlice'
// import axios from 'axios';
import { auth } from '../login/firebase';
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';

import axios from '../../axios'

// import * as timeago from

// import {selectChatName, selectChatId} from '../../features/chatSlice';
function SidebarChat(props) {



    const {id, chatName} = props;

    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    // const a = useSelector(selectChatId);
    // const b = useSelector(selectChatName);

    const displayChat = ()=>{
        dispatch(
            setChat({
                chatId: id,
                chatName: chatName
            })
        )
        // console.log(a,b);
       
        //this is Important!!!
        //--> it just sets the chat(when you click on a chat menu...(in sidebar))
    }

    

    const [lastMsg, setLastMsg] = useState('');
    const [lastPhoto, setLastPhoto] = useState('');
    const [lastTimestamp, setLastTimestamp] = useState('');

    const getSidebarElement = () => {
        axios.get(`/get/lastMessage?id=${id}`)
            .then((res)=> {
                setLastMsg(res.data.message);
                setLastPhoto(res.data.user.photo);
                setLastTimestamp(res.data.timestamp);
            })
    };

    useEffect(()=> {
        getSidebarElement();
        //realtime stuff (pusher goes here...)
    }, []);
    
    
    return (
        <div onClick={displayChat} className="sidebarChat">
            <Avatar
                onClick={()=>auth.SignOut()}
                src={lastPhoto}
                className="sidebar_avatar"
                />
                
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>{lastMsg}</p>
                {/* <small>{lastTimestamp}</small> */}
                <small>{new Date(parseInt(lastTimestamp)).toUTCString().slice(0,17)}</small>
            </div>
        </div>
    )
}

export default SidebarChat;

