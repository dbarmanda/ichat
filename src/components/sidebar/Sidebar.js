import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./sidebar.css"
import SearchIcon from '@mui/icons-material/Search';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SidebarChat from '../sidebar-Chats/SidebarChat';

import axios from '../../axios'

function Sidebar() {

    const [chats, setChats] = useState([]);

   

    const addChat = ()=>{
        alert(`let's add the new chat brother`);
    }
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar"/>
                <div className="sidebar_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar_inputBtn">
                    <RateReviewIcon onClick={addChat}/>
                </IconButton>
            </div>

            <div className="sidebar_chats">
                <SidebarChat id='1234' chatName="ramesh" />
                <SidebarChat id='1234' chatName="Youtube" />
                <SidebarChat id='1234' chatName="SUnny paaji" />
                <SidebarChat id='1234' chatName="salman bhiyo" />
                <SidebarChat id='1234' chatName="Rahul" />
                <SidebarChat id='1234' chatName="diwakar" />
                <SidebarChat id='1234' chatName="ramesh" />
                <SidebarChat id='1234' chatName="ramesh" />
                <SidebarChat id='1234' chatName="ramesh" />
                
            </div>
        </div>
    )
}

export default Sidebar
