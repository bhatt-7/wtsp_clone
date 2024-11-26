import React, { useState, useRef, useEffect, useCallback } from 'react';
import ChatItem from './ChatItem';
import '../Styles/ChatList.css';

const ChatList = ({ onChatSelect }) => {
    const chats = [
        { id: 1, name: 'Alice', message: 'Hey!', time: '10:30 AM', unread: 2 },
        { id: 2, name: 'Bob', message: 'Let’s catch up.', time: '9:45 AM', unread: 1 },
        { id: 3, name: 'Charlie', message: 'How are you?', time: '8:20 AM', unread: 0 },
        { id: 4, name: 'David', message: 'Long time no see!', time: 'Yesterday', unread: 3 },
        { id: 5, name: 'Eve', message: 'Happy Birthday!', time: 'Monday', unread: 0 },
        { id: 6, name: 'Frank', message: 'Call me when free.', time: '6:00 PM', unread: 2 },
        { id: 7, name: 'Grace', message: 'Meeting postponed.', time: '3:45 PM', unread: 0 },
        { id: 8, name: 'Hank', message: 'Let’s go for lunch.', time: '1:15 PM', unread: 1 },
        { id: 9, name: 'Ivy', message: 'Good luck!', time: '2 days ago', unread: 0 },
        { id: 10, name: 'Jack', message: 'Did you get the file?', time: '11:00 AM', unread: 4 },
        { id: 11, name: 'Kim', message: 'See you tomorrow!', time: '10:20 AM', unread: 0 },
        { id: 12, name: 'Leo', message: 'Thanks for the help!', time: 'Yesterday', unread: 1 },
        { id: 13, name: 'Mia', message: 'Can you share the notes?', time: '8:30 AM', unread: 0 },
        { id: 14, name: 'Nina', message: 'Let’s catch up soon!', time: '3:00 PM', unread: 2 },
        { id: 15, name: 'Oscar', message: 'Got it, thanks!', time: 'Yesterday', unread: 0 },
        { id: 16, name: 'Paul', message: 'Can you send the address?', time: '7:45 PM', unread: 1 },
        { id: 17, name: 'Quinn', message: 'On my way!', time: '2:50 PM', unread: 0 },
        { id: 18, name: 'Rita', message: 'Nice work on the project.', time: '5:30 PM', unread: 3 },
        { id: 19, name: 'Sam', message: 'Are you free tonight?', time: '4:10 PM', unread: 1 },
        { id: 20, name: 'Tina', message: 'Congratulations!', time: '11:15 AM', unread: 0 },
        { id: 21, name: 'Uma', message: 'Thanks for the invite!', time: 'Yesterday', unread: 0 },
        { id: 22, name: 'Victor', message: 'Can you review this?', time: '6:00 PM', unread: 2 },
        { id: 23, name: 'Wendy', message: 'Good to hear from you.', time: '4:45 PM', unread: 0 },
        { id: 24, name: 'Xander', message: 'Let’s plan a trip.', time: '1:30 PM', unread: 1 },
        { id: 25, name: 'Yara', message: 'See you at the meeting.', time: '9:00 AM', unread: 0 },
        { id: 26, name: 'Zara', message: 'What’s the update?', time: '5:15 PM', unread: 3 },
        { id: 27, name: 'Alan', message: 'I’ll call you back.', time: '7:30 AM', unread: 0 },
        { id: 28, name: 'Betty', message: 'Thanks for letting me know.', time: 'Yesterday', unread: 1 },
        { id: 29, name: 'Cody', message: 'Did you complete it?', time: '8:45 PM', unread: 0 },
        { id: 30, name: 'Diana', message: 'Let’s have coffee.', time: '12:00 PM', unread: 1 },
        { id: 31, name: 'Elena', message: 'Great job!', time: '2 days ago', unread: 0 },
        { id: 32, name: 'Felix', message: 'Any updates?', time: '3:15 PM', unread: 2 },
        { id: 33, name: 'Gina', message: 'I’ll check and let you know.', time: '5:00 PM', unread: 0 },
        { id: 34, name: 'Henry', message: 'Can we reschedule?', time: '10:45 AM', unread: 1 },
        { id: 35, name: 'Irene', message: 'Thanks!', time: '6:30 PM', unread: 0 },
        { id: 36, name: 'Jake', message: 'Let’s finalize tomorrow.', time: 'Yesterday', unread: 0 },
        { id: 37, name: 'Karen', message: 'I’m almost there.', time: '8:15 AM', unread: 1 },
        { id: 38, name: 'Liam', message: 'We’ll talk later.', time: '9:30 PM', unread: 0 },
        { id: 39, name: 'Mason', message: 'Sure thing.', time: '4:20 PM', unread: 2 },
        { id: 40, name: 'Nate', message: 'Check your email.', time: '11:30 AM', unread: 1 },
        { id: 41, name: 'Olivia', message: 'All set!', time: 'Yesterday', unread: 0 },
        { id: 42, name: 'Penny', message: 'Got it!', time: '2:40 PM', unread: 0 },
        { id: 43, name: 'Quincy', message: 'Let’s discuss.', time: '6:50 PM', unread: 1 },
        { id: 44, name: 'Rachel', message: 'Good idea!', time: '12:15 PM', unread: 0 },
        { id: 45, name: 'Sean', message: 'Where are you?', time: '10:05 AM', unread: 2 },
        { id: 46, name: 'Tara', message: 'See you there.', time: '3:25 PM', unread: 1 },
        { id: 47, name: 'Ursula', message: 'Let’s confirm.', time: '7:10 PM', unread: 0 },
        { id: 48, name: 'Victor', message: 'Can’t wait!', time: '5:35 PM', unread: 0 },
        { id: 49, name: 'Will', message: 'Let me know.', time: '9:10 AM', unread: 1 },
        { id: 50, name: 'Zane', message: 'Take care!', time: '11:55 AM', unread: 0 },
    ];
    const itemsPerPage = 10;

    const [visibleChats, setVisibleChats] = useState(chats.slice(0, itemsPerPage));
    const [page, setPage] = useState(1);
    const observerRef = useRef(null);

    const loadMoreChats = useCallback(() => {
        const nextPage = page + 1;
        setVisibleChats((prev) => chats.slice(0, nextPage * itemsPerPage));
        setPage(nextPage);
    }, [page, chats]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && visibleChats.length < chats.length) {
                    loadMoreChats();
                }
            },
            { root: null, rootMargin: '0px', threshold: 1.0 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [loadMoreChats, visibleChats.length, chats.length]);

    return (
        <div className="chat-container">
            {visibleChats.map((chat) => (
                <ChatItem key={chat.id} chat={chat} onClick={() => onChatSelect(chat)} />
            ))}
            <div ref={observerRef} style={{ height: '50px', background: 'transparent' }} />
        </div>
    );
};

export default ChatList;
