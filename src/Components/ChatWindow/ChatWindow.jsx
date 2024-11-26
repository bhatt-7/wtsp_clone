import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import MessageDisplay from './MessageDisplay';
import MessageInput from './MessageInput';
import './ChatWindow.css';
import { FaLock } from "react-icons/fa";
const ChatWindow = ({ selectedChat }) => {
    const messages = [
        { id: 1, sender: 'Alice', text: 'Hi!', time: '10:30 AM', sent: false },
        { id: 2, sender: 'You', text: 'Hello!', time: '10:31 AM', sent: true },
        { id: 3, sender: 'Alice', text: 'How are you?', time: '10:32 AM', sent: false },
        { id: 4, sender: 'You', text: 'I’m good, thanks! How about you?', time: '10:33 AM', sent: true },
        { id: 5, sender: 'Alice', text: 'I’m doing great!', time: '10:34 AM', sent: false },
        { id: 6, sender: 'You', text: 'That’s nice to hear.', time: '10:35 AM', sent: true },
        { id: 7, sender: 'Alice', text: 'Any plans for the weekend?', time: '10:36 AM', sent: false },
        { id: 8, sender: 'You', text: 'Not yet. Do you have any suggestions?', time: '10:37 AM', sent: true },
        { id: 9, sender: 'Alice', text: 'We could go hiking.', time: '10:38 AM', sent: false },
        { id: 10, sender: 'You', text: 'Sounds great! Let’s do that.', time: '10:39 AM', sent: true },
        { id: 11, sender: 'Alice', text: 'I’ll check the weather.', time: '10:40 AM', sent: false },
        { id: 12, sender: 'You', text: 'Okay, let me know.', time: '10:41 AM', sent: true },
        { id: 13, sender: 'Alice', text: 'Looks like it’ll be sunny!', time: '10:42 AM', sent: false },
        { id: 14, sender: 'You', text: 'Perfect! Let’s finalize the time.', time: '10:43 AM', sent: true },
        { id: 15, sender: 'Alice', text: 'How about 8 AM?', time: '10:44 AM', sent: false },
        { id: 16, sender: 'You', text: '8 AM works for me.', time: '10:45 AM', sent: true },
        { id: 17, sender: 'Alice', text: 'I’ll bring some snacks.', time: '10:46 AM', sent: false },
        { id: 18, sender: 'You', text: 'I’ll take care of water bottles.', time: '10:47 AM', sent: true },
        { id: 19, sender: 'Alice', text: 'Great teamwork!', time: '10:48 AM', sent: false },
        { id: 20, sender: 'You', text: 'Haha, yes!', time: '10:49 AM', sent: true },
        { id: 21, sender: 'Alice', text: 'Let’s invite Bob too.', time: '10:50 AM', sent: false },
        { id: 22, sender: 'You', text: 'Good idea! I’ll text him.', time: '10:51 AM', sent: true },
        { id: 23, sender: 'Alice', text: 'Cool. Keep me updated.', time: '10:52 AM', sent: false },
        { id: 24, sender: 'You', text: 'Sure thing.', time: '10:53 AM', sent: true },
        { id: 25, sender: 'Alice', text: 'I’m excited already!', time: '10:54 AM', sent: false },
        { id: 26, sender: 'You', text: 'Same here!', time: '10:55 AM', sent: true },
        { id: 27, sender: 'Alice', text: 'What should we wear?', time: '10:56 AM', sent: false },
        { id: 28, sender: 'You', text: 'Something comfortable for hiking.', time: '10:57 AM', sent: true },
        { id: 29, sender: 'Alice', text: 'Got it.', time: '10:58 AM', sent: false },
        { id: 30, sender: 'You', text: 'See you on Saturday!', time: '10:59 AM', sent: true },
        { id: 31, sender: 'Alice', text: 'See you! Bye for now.', time: '11:00 AM', sent: false },
        { id: 32, sender: 'You', text: 'Bye!', time: '11:01 AM', sent: true },
        { id: 33, sender: 'Alice', text: 'Hey, quick question.', time: '11:30 AM', sent: false },
        { id: 34, sender: 'You', text: 'Yes?', time: '11:31 AM', sent: true },
        { id: 35, sender: 'Alice', text: 'Should we carry sunscreen?', time: '11:32 AM', sent: false },
        { id: 36, sender: 'You', text: 'Yes, that’s a good idea.', time: '11:33 AM', sent: true },
        { id: 37, sender: 'Alice', text: 'Thanks for confirming.', time: '11:34 AM', sent: false },
        { id: 38, sender: 'You', text: 'No problem.', time: '11:35 AM', sent: true },
        { id: 39, sender: 'Alice', text: 'I’ll see you soon.', time: '11:36 AM', sent: false },
        { id: 40, sender: 'You', text: 'Take care!', time: '11:37 AM', sent: true },
        { id: 41, sender: 'Alice', text: 'You too!', time: '11:38 AM', sent: false },
        { id: 42, sender: 'You', text: 'Thanks!', time: '11:39 AM', sent: true },
        { id: 43, sender: 'Alice', text: 'Do you need a ride?', time: '11:40 AM', sent: false },
        { id: 44, sender: 'You', text: 'No, I’ll drive myself.', time: '11:41 AM', sent: true },
        { id: 45, sender: 'Alice', text: 'Okay, see you there.', time: '11:42 AM', sent: false },
        { id: 46, sender: 'You', text: 'Sure. Bye!', time: '11:43 AM', sent: true },
        { id: 47, sender: 'Alice', text: 'Bye!', time: '11:44 AM', sent: false },
        { id: 48, sender: 'You', text: 'Take care.', time: '11:45 AM', sent: true },
        { id: 49, sender: 'Alice', text: 'You too.', time: '11:46 AM', sent: false },
        { id: 50, sender: 'You', text: 'Will do.', time: '11:47 AM', sent: true },
    ]
    const [allMessages, setAllMessages] = useState(messages);

    const addMessage = (text) => {
        if (!selectedChat) {
            console.error('Cannot send messages: No chat selected.');
            return;
        }
        const newMessage = {
            id: allMessages.length + 1,
            sender: 'You',
            text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sent: true,
        };

        setAllMessages((prevMessages) => {
            const updatedMessages = [...prevMessages, newMessage];
            console.log("After state update:", updatedMessages);
            return updatedMessages;
        });
    };

    if (!selectedChat) return (
        <div className='bg-[#222e35] flex flex-col w-2/3 text-center '>
            <div className='flex flex-col absolute top-[50%] left-[50%] translate-x-[-10%] translate-y-[-50%] '>
                <div className='h-[188px] w-[320px] m-auto'>
                    <img src="https://static.whatsapp.net/rsrc.php/v3/y6/r/wa669aeJeom.png" alt="" />
                </div>
                <div className='download-message mt-4'>
                    <h1 className="text-gray-300 text-2xl font-bold mt-4 chat-placeholder text-center " style={{ fontFamily: '"SF Pro Text", "SF Pro Icons", system, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "Ubuntu", "Cantarell", "Fira Sans", sans-serif' }}>
                        Download WhatsApp for Windows
                    </h1>
                    <p className='text-gray-400 text-center mt-8 w-[100%] m-auto'>
                        Make calls , share your screen and get a faster experience when you download the <br />Windows app.
                    </p>
                </div>
                <div>
                    <button className='h-[37px] w-[203px] m-auto bg-[#00a17f] text-black rounded-full hover:bg-[#04c997] duration-300 mt-5'>
                        Get from Microsoft Store
                    </button>
                </div>
                <div className='lock flex justify-center items-center align-middle mt-28' style={{ marginBottom: '-150px' }}>
                    <FaLock style={{ color: 'gray', height: '10px', width: '10px' }} />
                    <p className='text-gray-400 text-center' style={{ fontSize: '13px' }}>
                        Your personal messages are end-to-end encrypted
                    </p>
                </div>
            </div>
        </div>
    )
    else return (
        <div className="flex flex-col w-2/3" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/58/c3/33/58c33377dfcbb3022493dec49d098b02.jpg")' }}>
            <ChatHeader chat={selectedChat} />
            <MessageDisplay allMessages={allMessages} />
            <MessageInput onSendMessage={addMessage} />
        </div>
    );
};

export default ChatWindow;
