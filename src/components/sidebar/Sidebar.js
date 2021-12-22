import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SidebarChat from "../sidebar-Chats/SidebarChat";

import axios from "../../axios";

import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux';

import {auth} from '../login/firebase'

function Sidebar() {

 /***** */
  const [chats, setChats] = useState([]);

  const user = useSelector(selectUser);

  const getChats = () => {
    axios.get("/get/conversationList").then((res) => {
      setChats(res.data);
    });
  };

  useEffect(() => {
    getChats();
  }, []);

  const addChat = (e) => {
    e.preventDefault();

    const chatName = prompt('Please Enter a chat-name');
    const firstMsg = prompt(`Please Enter a welcom message to ${chatName}`);

    console.log(chatName, firstMsg);
    if(chatName && firstMsg) {
        let chatId = '';

        axios.post('/api/new/chat', {
            chatName: chatName
        }).then((res)=> {
            chatId = res.data._id 
        }).then(()=>{
          console.log("hello");
            axios.post(`/api/new/message?id=${chatId}`, {
                message: firstMsg,
                timestamp: Date.now(),
                user: user
            })
        })
    }
}
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user.photo} onClick={()=>{auth.signOut();}} className="sidebar_avatar" />
        <div className="sidebar_input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar_inputBtn" onClick={addChat}>
          <RateReviewIcon  />
        </IconButton>
      </div>

      <div className="sidebar_chats">
        {
            chats.map((chat)=>(
            <SidebarChat key={chat.id} id={chat.id} chatName={chat.name} timestamp={chat.timestamp} />
            ))
        }
      </div>
    </div>
  );
}

export default Sidebar;
