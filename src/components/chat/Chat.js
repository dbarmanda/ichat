import React, { useEffect } from 'react'
import { useState } from 'react';
import "./chat.css";
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import { IconButton } from '@mui/material';
import Message from '../message/Message';
import { useSelector } from 'react-redux';
import {selectChatName, selectChatId} from '../../features/chatSlice'

function Chat() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);

    const sendMessage = (e)=>{
        e.preventDefault();
        //backend stuff

        setInput('');
    }

    const setMessage = (e)=>{
        setInput(e.target.value);
        console.log(input);
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
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                
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
