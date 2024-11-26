import React from 'react';

const ChatItem = ({ chat, onClick }) => {
    return (
        <div className='flex flex-col'>
            <hr className='ml-16 border-gray-600 bg-gray-500' />
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-600" onClick={onClick}>
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        {chat.name[0]}
                    </div>
                    <div className="ml-4">
                        <p className="font-semibold">{chat.name}</p>
                        <p className="text-sm text-gray-400">{chat.message}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500">{chat.time}</p>
                    {chat.unread > 0 && (
                        <span className="text-xs bg-green-500 text-white rounded-full px-2 py-1">
                            {chat.unread}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
