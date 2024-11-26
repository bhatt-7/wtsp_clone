import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import SideIconPane from './Components/IconPane/SideIconPane';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen">
      <SideIconPane />
      <Sidebar onChatSelect={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}

export default App;
