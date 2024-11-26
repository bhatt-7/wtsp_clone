import React from 'react';
import ProfileSection from './ProfileSection';
import SearchBar from '../ChatList/SearchBar';
import ChatList from '../ChatList/ChatList';
import Buttons from './Buttons';

const Sidebar = ({onChatSelect}) => {
    return (
        <div className="w-1/3 flex flex-col bg-[#111b21] text-white border-gray-500 overflow-y:hidden">
            <ProfileSection />
            <SearchBar />
            <Buttons/>
            <ChatList onChatSelect={onChatSelect} />
        </div>
    );
};

export default Sidebar;
