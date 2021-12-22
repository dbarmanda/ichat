import React, { useEffect } from 'react'
import { useState } from 'react';
import "./chat.css";
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import { IconButton } from '@mui/material';
import {Message} from '../message/Message';
import { useSelector } from 'react-redux';
import {selectChatName, selectChatId} from '../../features/chatSlice';
import {selectUser} from '../../features/userSlice';

import axios from '../../axios'

function Chat() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);

    const getConversation = (chatId) =>{
        // console.log(chatId)
        if(chatId){
            axios.get(`/get/conversation?id=${chatId}`)
                .then((res)=>{
                    // console.log(res.data);
                    setMessages(res.data[0].conversation);
                })
        }
    };

    useEffect(() => {
       getConversation(chatId);
    }, [chatId])

    const sendMessage = (e)=>{
        e.preventDefault();
        //backend stuff

        axios.post(`/api/new/message?id=${chatId}`, {
            message: input,
            timestamp: Date.now(),
            user: user 
        })

        setInput('');
    }

    const setMessage = (e)=>{
        setInput(e.target.value);
        // console.log(input);
    }

    // useEffect(() => {
    //    //every time chatId changes do this (load this)
    // }, [chatId])

    

    return (
        <div className="chat">
            {/* chat header  */}
            <div className="chat_header">
                <h4>To: <span className="chat_name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages display  */}
            <div className="chat_messages">
                
                {messages.map((message)=>{
                       return <Message key={message._id} id={message._id} sender={message.user} message={message.message} timestamp={message.timestamp}/>
                    })}
              
                
            </div>

            {/* chat input & btn  */}
            <div className="chat_input">
                <form>
                    <input type="text" placeholder="iMessage text here.."
                        value={input}
                        onChange={setMessage}/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>
                <IconButton onClick={sendMessage}>
                    <SendToMobileIcon className="chat_btn"/>
                </IconButton>
            </div>
        </div>
    )
}
export default Chat
